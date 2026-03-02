const express = require('express');
const indexRouter = require('./routes/index.routes');
const userRouter = require('./routes/users.routes');
const articleRouter = require('./routes/articles.routes');

const app = express();
app.use(express.json());

app.use('/', indexRouter);
app.use('/api/users', userRouter);
app.use('/api/articles', articleRouter);

module.exports = app;