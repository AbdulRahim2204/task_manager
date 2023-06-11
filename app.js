const express = require('express');
const mongoose = require('mongoose');
const taskRouter = require('./routes/taskRouter');

const app = express();
const PORT = 3000;
const uri = "mongodb+srv://abdelrheem2204:AbdoTaskManager@task-manager.mtdnmf4.mongodb.net/?retryWrites=true&w=majority";

const main = async (uri) => {
    try{
        await mongoose.connect(uri);
        app.listen(PORT, (err) => {console.log(err)});

    } catch(err) {
        console.log(err);
    }
}

main(uri);

app.set('view engine', 'ejs');

app.use([
    express.urlencoded({extended: false}),
    express.static('public'),
    express.json(),
]);

app.use('/', taskRouter);

// DB => AbdoTaskManager