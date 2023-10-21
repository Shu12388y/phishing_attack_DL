const express = require("express");
const route = express.Router();

const bodyPaser = require("body-parser");
route.use(bodyPaser.urlencoded({ extended: false }));
const {
  homeController,
  hackPort,
  dashBoard,
  LoginForm,
  postData,
  model
} = require("../controller/controller");

// define the home route
route.get("/", homeController);

route.get("/hackingPort", hackPort);

route.get("/hackboard", dashBoard);

route.get("/linkedln", LoginForm);

route.post("/data", postData);


route.get("/analysis",model)
module.exports = route;
