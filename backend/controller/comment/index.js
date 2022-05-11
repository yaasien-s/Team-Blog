const knex = require("../../db/knex");
const { v4 } = require("uuid");

// Add new user to user table
// NOTE: Upon registration we'll first create address if it's not in our database already (Avoid duplicates)
const addComment = async (req, res) => {
  try {
    const { comment } = req.body;
    console.log(comment);
    console.log(req.params.id);

    let newComment = {
      id: v4(),
      user_id: req.user.id,
      post_id: req.params.id,
      comment,
    };
    console.log(newComment);

    await knex("comment").insert(newComment); // Inserts new user
    res.send({ msg: "Comment successfully registered!" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Gets all user data even private fields
const getCommentAdmin = async (req, res) => {
  try {
    const user = await knex
      .select()
      .from("user")
      .where("id", req.user.id)
      .then((user) => {
        console.log(user[0]);
        return user[0];
      });

    if (user.isAdmin === true) {
      // Checks if user is an admin (Needs to be admin)
      await knex
        .select()
        .from("comment")
        .then((comment) => {
          console.log(comment);
          res.send(comment);
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
const getCommentData = async (req, res) => {
  try {
    await knex
      .from("comment")
      .select()
      .where("id", req.params.id)
      .then((comment) => {
        res.send(comment);
        console.log(comment);
      });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Updates user data by id.
const updateComment = async (req, res) => {
  try {
    const { comment, user_id, post_id } = req.body;
    const comments = {};
    if (user_id) comments.user_id = user_id;
    if (post_id) comments.post_id = post_id;
    if (comment) comments.comment = comment;
    console.log(comments);

    await knex("comment")
      .where("id", req.params.id)
      .update(comments)
      .then(() => {
        // Updates user by ID (req.user.id auth user)
        knex
          .select()
          .from("comment")
          .where("id", req.params.id)
          .then((comments) => {
            console.log(comments[0]);
            res.send(comments[0]);
          });
      });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Deletes user data by id. Route: [api/users/:id]
const removeComment = async (req, res) => {
  try {
    let exists = await knex
      .select()
      .from("comment")
      .where("id", req.params.id)
      .then((comment) => {
        console.log(comment[0]);
        return comment[0];
      });
    if (!exists) {
      return res.status(400).json({ msg: "Post not found!" });
    }

    if (exists.id === req.params.id) {
      knex("comment")
        .where("id", req.params.id)
        .del()
        .then(function () {
          res.json({ msg: "Comment deleted" });
        });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  addComment,
  getCommentAdmin,
  getCommentData,
  updateComment,
  removeComment,
};
