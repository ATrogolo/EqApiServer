var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var debug = require("debug")("eqServerApi");
var dotenv = require("dotenv").config();

var indexRouter = require("./routes/index");
const eqRouter = require("./routes/eq");

const GREEN = 2;

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

debug.color = GREEN;

app.use("/", indexRouter);

// EQHandler
app.use(`/api/easyquery/models`, eqRouter);
app.use('/translateToSql', (request, response) => {
  //response.setHeader("Content-Type", "application/json");
  //const sql = { sql : "SELECT * FROM MyTable" };
  //debug("SQL: " + sql.sql);
  //response.end(JSON.stringify(sql));

  response.setHeader("Content-Type", "text/plain");

  const sql = "SELECT * FROM ATable";
  debug("SQL: " + sql);

  response.end(sql);
});

debug(
  `Available endpoints:
  - http://localhost:${process.env.PORT}/api/easyquery/models/:modelId
  - http://localhost:${process.env.PORT}/api/easyquery/models/:modelId/valuelists/:table
  - http://localhost:${process.env.PORT}/api/easyquery/models/:modelId/queries/:queryId/sync
  - http://localhost:${process.env.PORT}/translateToSql`
);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
