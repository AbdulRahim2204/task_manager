const express = require('express');
const mongoose = require('mongoose');
const taskRouter = require('./routes/taskRouter');

const app = express();
const PORT = 3000;

app.listen(PORT, (err) => {console.log(err)});

app.set('view engine', 'ejs');

app.use([
    express.urlencoded({extended: false}),
    express.static('public'),
    express.json(),
]);

app.use('/', taskRouter);