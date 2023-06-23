const express = require('express');
const taskController = require('../controller/taskController');

const router = express.Router();

router.route('/').get(taskController.get_all_tasks).post(taskController.post_task);
router.route('/id').get(taskController.get_task).patch(taskController.update_task).delete(taskController.delete_task);

module.exports = router;
