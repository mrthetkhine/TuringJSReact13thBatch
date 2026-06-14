var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const customLogger = require('./middlewares/logger');
const mongoose = require('mongoose');
const { db } = require('./config/database');
const util = require('./util/AppError');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const demoRouter = require('./routes/demo');
const todoRouter = require('./routes/todos')
const movieRouter = require('./routes/movies');
const reviewRouter = require('./routes/reviews');
const {verify} = require('./middlewares/auth');
var app = express();

mongoose.connect(db).then(() => console.log('MongoDB connected!'))
    .catch(err => console.log(err));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(customLogger);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
//app.use('/users', usersRouter);
app.use('/demo', demoRouter);
app.use('/api/users',usersRouter);
app.use('/api/todos', verify,todoRouter);
app.use('/api/movies',verify,movieRouter);
app.use('/api/reviews',verify,reviewRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  //console.error(err);
  if( err instanceof  util.NotFoundError)
  {
    res.status(404)
        .json({
          message: err.message,
          errors: err.errors
        });
  }
  else if (err instanceof mongoose.Error.ValidationError) {
    res.status(400)
        .json({ errors: err.errors });
  }
  else
  {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
  }

});

module.exports = app;
