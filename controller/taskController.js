const Task = require('../model/task');

const get_tasks = (req, res) => {
    Task.find()
    .then((data) => {
        res.render('index', {data});
    })
    .catch((err) => {
        console.log(err);
    })
}

const post_task = (req, res) => {
    const { taskName } = req.body;
    const task = new Task({name: taskName, complete: false});

    task.save()
    .then((newTask) => {
        res.send(newTask);

    }).catch((err) => {console.log(err)});
}

const delete_task = (req, res) => {
    const taskId = req.params.id;
    Task.findByIdAndDelete(taskId)
    .then(doc => {
        console.log(doc);
        res.send(doc);
    })
    .catch(err => console.log(err));

}

module.exports = {
    get_tasks,
    post_task,
    delete_task
}