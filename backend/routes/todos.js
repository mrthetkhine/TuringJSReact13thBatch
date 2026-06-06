let express = require('express');
let router = express.Router();
let Todo = require('../controllers/TodoController');

router.get('/', Todo.getAllTodo);
router.post('/', Todo.saveTodo);

module.exports = router;