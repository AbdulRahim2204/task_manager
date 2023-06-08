const get_tasks = (req, res) => {
    res.render('index') ;
}

const post_task = (req, res) => {
    taskName = req.body.task;
}

module.exports = {
    get_tasks,
}