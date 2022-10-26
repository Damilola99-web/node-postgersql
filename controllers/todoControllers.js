const pool = require('../db');

exports.postTodo = async (req, res) => {
	try {
		const { description } = req.body;
		const newTodo = await pool.query(
			'INSERT INTO todo (description) VALUES ($1) RETURNING *',
			[ description ]
		);
		res.status(200).json(newTodo.rows[0]);
	} catch (error) {
		res.status(401).json(error);
	}
};

exports.getTodos = async (req, res) => {
	try {
		const todos = await pool.query('SELECT * FROM todo');
		res.status(200).json(todos.rows);
	} catch (error) {
		res.status(401).json(error);
	}
};

exports.getTodo = async (req, res) => {
	const id = req.params.id;
	try {
		const todo = await pool.query('SELECT * FROM todo WHERE todo_id = $1', [
			id
		]);
		res.status(200).send(todo.rows[0]);
	} catch (error) {
		res.status(401).json(error);
	}
};

exports.editTodo = async (req, res) => {
	const id = req.params.id;
	const { description } = req.body;
	try {
		const updatedTodo = await pool.query(
			'UPDATE todo SET description = $1 WHERE todo_id = $2 RETURNING *',
			[ description, id ]
        );
        res.status(200).json(updatedTodo.rows[0])
	} catch (error) {
		res.status(401).json(error);
	}
}

exports.deleteTodo = async (req, res) => {
    const id = req.params.id
    try {
        const deletedTodo = await pool.query('DELETE FROM todo WHERE todo_id = $1 RETURNING *', [id])
        res.status(200).json(deletedTodo.rows[0])
    } catch (error) {
        res.status(401).json(error)
    }
}