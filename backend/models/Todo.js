const mongoose = require('mongoose');
const { Schema } = mongoose;
const TodoSchema = new Schema({
    title: String,
    completed: Boolean,
})
const Todo = mongoose.model('Todo', TodoSchema);
module.exports = Todo;