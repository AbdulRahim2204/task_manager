const mongoose = require('mongoose');

const { Schema } = mongoose;

const taskSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    complete: Boolean
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
