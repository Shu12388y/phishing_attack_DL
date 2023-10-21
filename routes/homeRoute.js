const express = require("express");
const route = express.Router();
const { homeController, hackPort,dashBoard } = require("../controller/controller");

// define the home route
route.get("/", homeController);

route.get("/hackingPort", hackPort);

route.get("/hackboard",dashBoard)
module.exports = route;
