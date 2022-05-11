const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

const userController = require("../../controller/user");

// REGISTER
router.post("/register", userController.addUser);

// LOGIN
router.post("/login", userController.login);

// GET
router.get("/admin", auth, userController.getUsersAdmin);

// UPDATE
router.put("/update", auth, userController.updateUser);

// DELETE
router.delete("/delete", auth, userController.removeUser);

module.exports = router;
