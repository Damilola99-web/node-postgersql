const express = require('express');
const {
	postTodo,
	getTodos,
	getTodo,
    editTodo,
    deleteTodo
} = require('../controllers/todoControllers');
const pool = require('../db');
const Router = express.Router();

// create a todo
Router.post('/', postTodo);

Router.get('/', getTodos);

Router.get('/:id', getTodo);

Router.put('/:id', editTodo);

Router.delete('/:id', deleteTodo)

module.exports = Router;
