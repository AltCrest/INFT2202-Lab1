const express = require("express");
const pug = require("pug");
const animal = require("./routes/animal.router");
require("dotenv").config();

// initialize method
const app = express();
// use port from env or default to 3000 if not set
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));

// configure routes
app.use("/", animal);

// setup template engine
app.set("views", `${__dirname}/views`);
app.set("view engine", "pug");

// Listen on port
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
