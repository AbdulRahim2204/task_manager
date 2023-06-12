const Task = require('../model/task');

const get_tasks = async (req, res) => {
    Task.find()
    .then((data) => {
        console.log(data);
        res.render('index', {data});
    })
    .catch((err) => {
        console.log(err);
    })
}

const post_task = async (req, res) => {
    const { taskName } = req.body;
    console.log(taskName);
    const task = new Task({name: taskName});

    task.save()
    .then(() => {
        res.send({taskName, redirect: 'index'});

    }).catch((err) => {console.log(err)});
}

module.exports = {
    get_tasks,
    post_task
}