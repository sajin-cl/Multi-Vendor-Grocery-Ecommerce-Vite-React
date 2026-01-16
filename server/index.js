const express = require('express');
const cors = require('cors');
const fileup = require('express-fileupload');
const session = require('express-session');
const logger = require('morgan');
const database = require('./config/database');


const authRouter = require('./routes/auth.routes');

const port = 4000;

const app = express();


app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileup());
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  })
);


app.use('/api/auth',authRouter);


app.listen(port, () => console.info(`server: http://localhost:${port}`))