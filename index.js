const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const sequelize = require("sequelize");
const dotenv = require("dotenv");
const session = require('express-session');
dotenv.config();
const passport = require("passport");
const { loginCheck } = require("./auth/passport");
loginCheck(passport);

// const db = require("./models");
// db.sequelize.sync();
app.use(bodyParser.json());

app.set("view engine", "ejs");

//BodyParsing
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret:'oneboy',
    saveUninitialized: true,
    resave: true
  }));
  

app.use(passport.initialize());
app.use(passport.session());
//Routes
// hint for integration
// const loginRouter = require("./routes/login");
// const shortUrlRouter = require("./routes/shortUrlRouter");

app.use("/", loginRouter);
app.use("/", shortUrlRouter);

const PORT = process.env.PORT || 4111;

app.listen(PORT, console.log("Server has started at port " + PORT));
