const express = require('express');
const session = require("express-session");
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
app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/articles', articleRouter);

app.use(errorHandler);
module.exports = app;