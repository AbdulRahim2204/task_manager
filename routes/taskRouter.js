const express = require('express');
const taskController = require('../controller/taskController');

const router = express.Router();

router.get('/', taskController.get_task);

module.exports = router;
