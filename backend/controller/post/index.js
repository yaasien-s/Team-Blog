const knex = require("../../db/knex");
const { v4 } = require("uuid");

// Add new user to user table
// NOTE: Upon registration we'll first create address if it's not in our database already (Avoid duplicates)
const addPost = async (req, res) => {
  try {
    const { name, category, text, img } = req.body;
    console.log(name, category, text, img);

    let newPost = {
      id: v4(),
      name,
      category,
      text,
      img,
      user_id: req.user.id,
    };
    console.log(newPost);

    await knex("post").insert(newPost); // Inserts new user
    res.send({ msg: "Post successfully registered!" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Get's all this will be my dis[lay]
const getPostAuth = async (req, res) => {
  try {
    await knex
      .from("post")
      .select("name", "category", "img", "likecounter", "dislikecounter")
      .then((posts) => {
        res.send(posts);
      });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Gets all user data even private fields
const getPostAdmin = async (req, res) => {
  try {
    const usera = await knex
      .select()
      .from("user")
      .where("id", req.user.id)
      .then((user) => {
        return user[0];
      });

    if (usera.isAdmin === true) {
      // Checks if user is an admin (Needs to be admin)
      await knex
        .select()
        .from("post")
        .then((posts) => {
          res.send(posts);
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
const getPostData = async (req, res) => {
  try {
    await knex
      .from("post")
      .select()
      .where("id", req.params.id)
      .then((post) => {
        res.send(post);
        console.log(post);
      });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Updates user data by id.
const updatePost = async (req, res) => {
  try {
    const { name, category, text, img, likecounter, dislikecounter } = req.body;
    const post = {};

    if (category) post.category = category;
    if (img) post.img = img;
    if (text) post.text = text;
    if (likecounter) post.likecounter = likecounter;
    if (dislikecounter) post.dislikecounter = dislikecounter;
    if (name) post.name = name;

    await knex("post")
      .where("id", req.params.id)
      .update(post)
      .then(() => {
        // Updates user by ID (req.user.id auth user)
        knex
          .select()
          .from("post")
          .where("id", req.params.id)
          .then((post) => {
            res.send(post[0]);
          });
      });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Deletes user data by id. Route: [api/users/:id]
const removePost = async (req, res) => {
  try {
    let exists = await knex
      .select()
      .from("post")
      .where("id", req.params.id)
      .then((post) => {
        return post[0];
      });
    if (!exists) {
      return res.status(400).json({ msg: "Post not found!" });
    }

    if (exists.id === req.params.id) {
      knex("post")
        .where("id", req.params.id)
        .del()
        .then(function () {
          res.json({ msg: "Post deleted" });
        });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  addPost,
  getPostAuth,
  getPostAdmin,
  getPostData,
  updatePost,
  removePost,
};
