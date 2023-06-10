const get_tasks = (req, res) => {
    res.render('index') ;
}

const post_task = (req, res) => {
    const { taskName } = req.body;

    console.log(taskName);
    res.send({taskName, redirect: 'index'});
}

module.exports = {
    get_tasks,
    post_task
}