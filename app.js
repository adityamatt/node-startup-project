const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectionManager = require("./database/databaseManager");
const attachDatabase = require("./middlewares/attachDatabase");

const errorHandler = require("./middlewares/errorHandler");
const indexRouter = require("./routes/index");
const app = express();

connectionManager
  .validate()
  .then((res) => {
    if (res) {
      console.log(
        "Successfully established connetion to database ->",
        gConfig.database.name
      );
    }
  })
  .catch((err) => {
    console.log(
      "Couldn't Establish connection to database, shutting down server",
      err
    );
    //STOP SERVER CODE
  });
app.use(cors());
app.use(attachDatabase(connectionManager.getInstance()));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//Server properties
app.use(logger("dev", { skip: () => gConfig.configId === "testing" }));
//app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//Route incoming requests
app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use(errorHandler);

module.exports = app;
