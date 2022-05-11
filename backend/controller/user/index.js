const jwt = require("jsonwebtoken");
const config = require("config");
const bcrypt = require("bcryptjs");
const knex = require("../../db/knex");
const { v4 } = require("uuid");

// Reusable function (Gets user by email, checks if email is database)
const getUser = async (email) => {
  return await knex
    .select()
    .from("user")
    .where("email", email)
    .then((user) => {
      return user[0];
    });
};

// Add new user to user table
// NOTE: Upon registration we'll first create address if it's not in our database already (Avoid duplicates)
const addUser = async (req, res) => {
  try {
    let { name, email, password, img, isAdmin } = req.body;
    console.log(name, email, password, img, isAdmin);

    let emailExists = await getUser(email); // Checks if user exists by email(Unique)

    if (!emailExists) {
      // If user isn't found new user gets inserted into user table
      let newUser = {
        id: v4(),
        name,
        email,
        password,
        img,
        isAdmin,
      };

      const salt = await bcrypt.genSalt(10);

      newUser.password = await bcrypt.hash(password, salt); // Hashes our password for security

      console.log(newUser);

      await knex("user").insert(newUser); // Inserts new user

      res.send({ msg: "User successfully registered!" });
    } else {
      res.send({ msg: "User email already registered!" }); // Condition if user is already in the database
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Logins in user and return id and access token. Route: [api/users/login]
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);

    let user = await knex
      .select()
      .from("user")
      .where("email", email)
      .then((user) => {
        return user[0];
      }); // Checks for user in the database

    console.log(user);
    if (!user) {
      // Condition if user not found
      return res.status(400).json({ msg: "Email not found!" });
    }

    const isMatch = await bcrypt.compare(password, user.password); // Hashes password and compares it to password in users data

    if (!isMatch) {
      // Condition if password isn't correct
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    const payload = {
      // This is what will be returned if have correct token (User id get's returned so that we can search user within our database)
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      config.get("jwtSecret"), // Gets secret in default.json (config handles the functionality to fetch secret)
      {
        expiresIn: "3d", // 3 days
      },
      (err, token) => {
        if (err) throw err;
        res.json({ id: user.id, token }); // Returna user's ID and access token
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Get's all users data that's public for any logged in user
const getUsersAuth = async (req, res) => {
  try {
    const user = await knex
      .select()
      .from("user")
      .where("id", req.user.id)
      .then((user) => {
        return user[0];
      });

    if (user.id === req.user.id) {
      await knex
        .from("user")
        .select("name", "email")
        .then((users) => {
          res.send(users);
        });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Gets all user data even private fields
const getUsersAdmin = async (req, res) => {
  try {
    const user = await knex
      .select()
      .from("user")
      .where("id", req.user.id)
      .then((user) => {
        console.log(user[0]);
        return user[0];
      });

      console.log(user.isAdmin);
    if (user.isAdmin === true) {
      // Checks if user is an admin (Needs to be admin)
      await knex
        .select()
        .from("user")
        .then((user) => {
          res.send(user);
        });
    } else {
      res.status(401);
      return res.send("Access Rejected, Not Authorized");
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Get's logged in users data.
const getUserData = async (req, res) => {
  try {
    const user = await knex
      .from("user")
      .select("id", "name", "email", "password", "Img", "isAdmin") // Returns only theses fields
      .where("id", req.user.id)
      .then((user) => {
        return user[0];
      });

    if (user.id === req.user.id) {
      res.send(user);
    } else {
      res.status(401);
      return res.send("Access Rejected, Not Authorized");
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Updates user data by id.
const updateUser = async (req, res) => {
  try {
    const user = await knex
      .select()
      .from("user")
      .where("id", req.user.id)
      .then((user) => {
        return user[0];
      });

    if (user.id === req.user.id) {
      const { name, email, password, img } = req.body;

      /** Constructing object to insert **/
      const user = {};
      if (name) user.name = name; // If name was included in req.body, it will overwrite name to be req.body.name value (Applies to all)
      if (email) user.email = email;
      if (password) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
      }
      if (img) user.img = img;
      await knex("user")
        .where("id", req.user.id)
        .update(user)
        .then(() => {
          // Updates user by ID (req.user.id auth user)
          knex
            .select("name", "email", "password", "img")
            .from("user")
            .where("id", req.user.id)
            .then((user) => {
              res.send(user[0]);
            });
        });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Deletes user data by id. Route: [api/users/:id]
const removeUser = async (req, res) => {
  try {
    const user = await knex
      .select()
      .from("user")
      .where("id", req.user.id)
      .then((user) => {
        return user[0];
      });

    if (user.id === req.user.id) {
      knex("user")
        .where("id", req.user.id)
        .del()
        .then(function () {
          // Deletes user by ID (req.user.id auth user)
          res.json({ msg: "User removed!" });
        });
    } else {
      res.status(401);
      return res.send("Access Rejected, Not Authorized");
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  addUser,
  login,
  getUsersAuth,
  getUser,
  getUsersAdmin,
  getUserData,
  updateUser,
  removeUser,
};
