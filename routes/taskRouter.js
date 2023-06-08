const express = require('express');
const taskController = require('../controller/taskController');

const router = express.Router();

router.get('/', taskController.get_tasks);
router.post('/add-task', taskController.post_task);

module.exports = router;
