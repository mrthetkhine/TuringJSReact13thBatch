const Todo = require("../models/Todo");

async function getAllTodo()
{
    let todos = await Todo.find();
    return todos;
}
async function saveTodo(todo)
{
    let newTodo = new Todo(todo);
    let savedTodo = await newTodo.save();
    return savedTodo;
}
module.exports = {
    getAllTodo,
    saveTodo,
}