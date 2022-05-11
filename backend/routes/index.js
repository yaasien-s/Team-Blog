const express = require("express");
const router = express.Router();

router.use("/user", require("./user"));

router.use("/post", require("./post"));

router.use("/comment", require("./comment"));


router.get("/", (req, res) => {
  res.send("Welcome to Arden's API");
});

module.exports = router;
