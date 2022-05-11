const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

const postController = require("../../controller/post");

// GET by Auth(what unauth users can see)
router.get("/", postController.getPostAuth);

// GET all
router.get("/admin", auth, postController.getPostAdmin);

// CREATE
router.post("/create", auth, postController.addPost);

// UPDATE
router.put("/update/:id", auth, postController.updatePost);

// DELETE
router.delete("/delete/:id", auth, postController.removePost);

// GET by id
router.get("/:id", postController.getPostData);

module.exports = router;
