const todoService = require('../services/TodoService');
const appError = require("../util/AppError");
async function getAllTodo(req,res)
{
    console.log('GET /todos');
    let todos = await todoService.getAllTodo();
    res.json({
        message: 'Todo list retrieved successfully.',
        data:todos
    });
}
async function getTodoById(req,res)
{
    let id = req.params.id;
    let todo = await todoService.getTodoById(id);
    if(todo)
    {
        res.json({
            message:'Todo retrived successfully.',
            data: todo,
        });
    }
    else
    {
        throw new appError.NotFoundError('Todo not found');
    }

}
async function updateTodoById(req,res)
{
    let id = req.params.id;
    let todo = req.body;
    let updatedTodo = await todoService.updateTodoById(id,todo);
    if(updatedTodo)
    {
        res.json({
            message:'Todo updated successfully.',
            data: updatedTodo,
        });
    }
    else
    {
        res.status(404).json({
            message:'Todo not found.',
        });
    }

}
async function saveTodo(req,res)
{
    console.log('POST /todos ',req.body);
    let todo = req.body;
    let savedTodo = await todoService.saveTodo(todo);
    res.status(201).json({
        message:'Todo saved successfully.',
        data: savedTodo,
    });
}
async function deleteTodoById(req,res)
{
    let id = req.params.id;
    let todo = await todoService.deleteTodoById(id);
    if(todo)
    {
        res.json({
            message:'Todo deleted successfully.',
            data: todo,
        });
    }
    else
    {
        res.status(404).json({
            message:'Todo not found.',
        });
    }

}
module.exports = {
    getAllTodo,
    getTodoById,
    saveTodo,
    updateTodoById,
    deleteTodoById,

}