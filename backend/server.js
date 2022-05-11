// first we need to import the modules we will be using
const express = require("express");
const port = process.env.PORT || 3000;
const routes = require("./routes");

// now let allow our app to use express
const cors = require("cors");
const app = express();

// now let tell our app to use cors as well
app.use(cors());

// express.json is replacement for bodyparser , Include extra params {} if needed
app.use(express.json({ limit: "5MB", extended: true }));

// Initializing routes
app.use("/", routes);

app.listen(port, function () {
  console.log(`Server running on http://localhost:${port}`);
});
