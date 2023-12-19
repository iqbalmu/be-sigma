const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cors = require('cors')
const session = require('express-session')
const flash = require('connect-flash')
const logger = require('morgan');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override')

const webRouter = require('./src/route/web');
const apiRouter = require('./src/route/api');
const errorMiddleware = require('./src/middleware/error-middleware');

const app = express();

app.use(cors({
  origin: "*"
}))
app.use(methodOverride('_method'))
app.use(flash())
app.use(
  session({
    secret: 'justasecrettosession123123123',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: 'auto'
    }
  })
);

// view engine setup
app.engine('ejs', ejsMate);
app.set('views', path.join(__dirname, 'src/view'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/sbadmin-2', express.static(path.join(__dirname, 'node_modules/startbootstrap-sb-admin-2')));

app.use('/api', apiRouter);
app.use('/', webRouter);

// error-middleware
app.use(errorMiddleware);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
