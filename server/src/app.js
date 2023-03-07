require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const cors = require('cors');

const indexRouter = require('./routes/index.routes');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors(
  {
    credentials: true,
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  },
));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', true);
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  next();
});

const sessionConfig = {
  name: 'sid',
  secret: process.env.COOKIE_SECRET,
  store: new FileStore({}), // подключаем папку для хранения кук
  resave: false, // пересохранение куки
  saveUninitialized: false, // почитать за эту настройку
  cookie: { secure: false, maxAge: 1000 * 60 * 60 * 24 }, // почитать, сейчас устанавливаем время жизни куки 1 день
};
// записывает в переменную req.session.user данные из прилетевшей куки, если такая же была найдена в кук базе данных.
// если куки нету или она не найдена в session storage, то req.session.user будет равно unfefined
app.use(session(sessionConfig));
app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`Server is up on ${PORT} port`);
});
