const todoService = require('../services/TodoService');

async function getAllTodo(req,res)
{
    console.log('GET /todos');
    let todos = await todoService.getAllTodo();
    res.json(todos);
}
async function saveTodo(req,res)
{
    console.log('POST /todos ',req.body);
    let todo = req.body;
    let savedTodo = await todoService.saveTodo(todo);
    res.json(savedTodo);
}
module.exports = {
    getAllTodo,
    saveTodo,
}