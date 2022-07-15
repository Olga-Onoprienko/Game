require('dotenv').config();
require('@babel/register');
const session = require('express-session'); 
const FileStore = require('session-file-store')(session);

const express = require('express');
const path = require('path');
const logger = require('morgan');


const indexRouter = require('./routes/homeRouter');
const profileRouter = require('./routes/profileRouter');
const registerRouter = require('./routes/registerRouter');
const loginRouter = require('./routes/loginRouter');
const  logoutRouter =require('./routes/logoutRouter');
const gameRouter = require('./routes/game');
const deckRouter = require('./routes/deck');


const app = express();
const PORT = process.env.PORT ?? 3000;

const { sequelize } = require('./db/models');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const sessionConfig = {
  name: 'sid', 
  store: new FileStore({}), 
  secret: '7408f58d6b15093573d5', //process.env.COOKIE_SECRET, 
  resave: false,                     
  saveUninitialized: false, 
  cookie: {
    secure: process.env.NODE_ENV === 'production', 
    maxAge: 1000 * 60 * 60 * 24 * 10, 
  },
}

app.use(session(sessionConfig));

app.use((req, res, next) => {
  console.log("\n\x1b[33m", 'req.session.user :', req.session?.user);
  next();
});

app.use('/', indexRouter);
app.use('/profile', profileRouter);
app.use('/registration', registerRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/game', gameRouter);
app.use('/deck', deckRouter);


app.listen(PORT, async () => {
  console.log(`server started on PORT: ${PORT}`);
  try {
    await sequelize.authenticate();
    console.log('Database connected');
  } catch (error) {
    console.log(error, 'error');
  }
});
