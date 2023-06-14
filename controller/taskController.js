const Task = require('../model/task');

const get_tasks = async (req, res) => {
    Task.find()
    .then((data) => {
        res.render('index', {data});
    })
    .catch((err) => {
        console.log(err);
    })
}

const post_task = async (req, res) => {
    const { taskName } = req.body;
    const task = new Task({name: taskName});

    task.save()
    .then((newTask) => {
        res.send(newTask);

    }).catch((err) => {console.log(err)});
}

module.exports = {
    get_tasks,
    post_task
}