var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
require('env2')('config.env'); /* Don't worry about the red squiggly here. Things are fine! */
const session = require('express-session');
const oneDay = 1000 * 60 *60 * 24; /* this is how long cookies last */
var MongoDBStore = require('connect-mongodb-session')(session);
const passport = require('passport');
const LocalStrategy = require('passport-local');
var cors = require('cors');


/* Connect to MongoDB */
const { SECRET, DB_URL, PORT = 3000 } = process.env;
mongoose.set('strictQuery', false);
mongoose.connect( DB_URL, { useNewUrlParser: true } );
const connection = mongoose.connection;

/* Continue on with regular express stuff */
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var menuRouter = require('./routes/menu');

var app = express();

/* Set up CORS (This tells the app to allow requests from hosts / ip's other than itself)*/
app.use(cors);


/* Express Sessions and Cookie Setup */
var store =  new MongoDBStore({ 
  uri: DB_URL,
  database: 'PizzaThomas', 
  collection: 'sessions' 
},
function(error) {
  console.log(error);
});

store.on('error', function(error) {
  console.log('SESSION STORE ERROR: ', error);
});

const sessionConfig = {
  store,
  name: 'session',
  secret: SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: oneDay
  }
}

app.use(session(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());
//passport.use(new LocalStrategy(User.authenticate()))

//passport.serializeUser(User.serializeUser());
//passport.deserializeUser(User.deserializeUser());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


/* add more routers here */
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/menu', menuRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


/* App is working message */
app.listen(() => {
  console.log('Express app running at: http://localhost:' + PORT);
});

/* Connection to DB is successful Message */
connection.once('open', function() {
  console.log('Connection to MongoDB established succesfully!');
});

module.exports = app;