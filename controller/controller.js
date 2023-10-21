const homeController = (req, res, next) => {
  res.render("index.ejs");
};

const hackPort = (req, res, next) => {
  res.render("hack.ejs");
};

const dashBoard = (req, res, next) => {
  res.render("DashBoard.ejs");
};

module.exports = {
  homeController,
  hackPort,
  dashBoard,
};
