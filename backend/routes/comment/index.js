const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

const commentController = require("../../controller/comment");

// GET all

router.get("/admin", auth, commentController.getCommentAdmin);

// CREATE
router.post("/create/:id", auth, commentController.addComment);

// UPDATE
router.put("/update/:id", auth, commentController.updateComment);

// DELETE
router.delete("/delete/:id", auth, commentController.removeComment);

// GET by id
router.get("/:id", commentController.getCommentData);

module.exports = router;
