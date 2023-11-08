const express = require("express");
require('dotenv').config()
const app = express();
const PORT = process.env.PORT || 4000;
const path = require("path");
const homeRoute = require("./routes/homeRoute");

const publicFile = path.join(__dirname, "./public");
app.set(express.static(publicFile));
app.set("view engine", "ejs");
app.set("views", "views");
app.use(homeRoute);
app.listen(PORT, () => {
  console.log("server is on",PORT);
});
