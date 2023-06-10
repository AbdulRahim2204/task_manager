const get_tasks = (req, res) => {
    res.render('index') ;
}

const post_task = (req, res) => {
    taskName = req.body.task;
    console.log(taskName);
    res.send({task: taskName, redirect: 'index'});
}

module.exports = {
    get_tasks,
    post_task
}