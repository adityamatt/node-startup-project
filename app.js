const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const bodyParser = require("body-parser");
const databaseManagerClass = require("./database/databaseManager");
const attachDatabase = require("./middlewares/attachDatabase");
const errorHandler = require("./middlewares/errorHandler");
//Database Connection Work
const databaseManager = new databaseManagerClass();
databaseManager
  .validate()
  .then((validationResult) => {
    if (validationResult) {
      console.log("Database connection established ->", gConfig.database.name);
    }
  })
  .catch((err) => {
    console.log("Database Connection Error,Check Logs");
  });

//import routers
let indexRouter = require("./routes/index");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//Server properties
app.use(logger("dev"));
//app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(attachDatabase(databaseManager.getConnection()));
//Route incoming requests
app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(errorHandler);

module.exports = app;
