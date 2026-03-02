const express = require('express');
const session = require("express-session");
const path = require("path");
const { errorHandler } = require('./middlewares/errorHandler');
const indexRouter = require('./routes/index.routes');
const userRouter = require('./routes/users.routes');
const articleRouter = require('./routes/articles.routes');

const app = express();
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET || "dev-secret-key",
    resave: false,
    saveUninitialized: false
  })
);

app.set("views", path.join(__dirname, "views"));
app.engine("pug", require("pug").__express);
app.engine("ejs", require("ejs").__express);

app.use(express.static(path.join(__dirname, "..", "public")));
app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/articles', articleRouter);

app.use(errorHandler);
module.exports = app;