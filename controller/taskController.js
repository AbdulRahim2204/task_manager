const Task = require('../model/task');

const get_all_tasks = (req, res) => {
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

const get_task = async (req, res) => {
    res.json({"MSG": "hello spcific task"});
}

const update_task = async (req, res) => {
    res.json({"MSG": "task updated"});
}

const delete_task = (req, res) => {
    const taskId = req.params.id;
    Task.findByIdAndDelete(taskId)
    .then(task => {
        res.send(task);
    })
    .catch(err => console.log(err));

}

module.exports = {
    get_all_tasks,
    post_task,
    get_task,
    update_task,
    delete_task
}