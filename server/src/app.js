require('dotenv').config();
const express = require('express')
const morgan = require('morgan')
const session = require('express-session');  
const FileStore = require('session-file-store')(session);

const app = express()

const PORT = process.env.PORT || 3001



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

const sessionConfig = {  
    name: 'sid',  
    secret: process.env.COOKIE_SECRET,
    store: new FileStore({}), // подключаем папку для хранения кук
    resave: false, // пересохранение куки
    saveUninitialized: false, // почитать за эту настройку  
    cookie: { secure: false, maxAge: 1000 * 60 * 60 * 24 }, // почитать, сейчас устанавливаем время жизни куки 1 день  
  };

app.get('/', (req, res) => {

    res.send('Main')
})

app.listen(PORT, () => {
    console.log('server working ')
})