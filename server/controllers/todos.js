const pool = require("../db/connect");
const { StatusCodes } = require("http-status-codes");
const { NotFoundError } = require("../errors");

const createTodo = async (req, res) => {
  const { description } = req.body;
  const newTodo = await pool.query(
    "INSERT INTO todo (description) VALUES ($1) RETURNING *",
    [description]
  );
  res.status(StatusCodes.OK).json(newTodo.rows[0]);
};

const getAllTodo = async (req, res) => {
  const { status } = req.query; 
  let query;
  let queryParams = [];


  if (status === "completed") {
    query = "SELECT * FROM todo WHERE completed = true";
  } else if (status === "active") {
    query = "SELECT * FROM todo WHERE completed = false";
  } else {
   
    query = "SELECT * FROM todo";
  }

 
  const todos = await pool.query(query, queryParams);


  res.status(StatusCodes.OK).json(todos.rows);
};


const getTodo = async (req, res) => {
  const { id } = req.params;
  const newTodo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
    id,
  ]);
  if (newTodo.rows.length === 0) {
    throw new NotFoundError(`No todo with id ${id}`);
  }
  res.status(StatusCodes.OK).json(newTodo.rows[0]);
};

const updateTodo = async (req, res) => {
  const {
    body: { description, completed },
    params: { id },
  } = req;

  let todo;

  if (completed !== undefined) {

    todo = await pool.query(
      "UPDATE todo SET description = $1, completed = $2 WHERE todo_id = $3 RETURNING *",
      [description, completed, id]
    );
  } else {

    todo = await pool.query(
      "UPDATE todo SET description = $1 WHERE todo_id = $2 RETURNING *",
      [description, id]
    );
  }


  if (todo.rows.length === 0) {
    throw new NotFoundError(`No todo with id ${id}`);
  }


  res.status(StatusCodes.OK).json(todo.rows[0]);
};


const deleteTodo = async (req, res) => {
  const { id } = req.params;
  const todo = await pool.query("DELETE from todo where todo_id = $1", [id]);
  console.log(todo);
  res.status(StatusCodes.OK).json({ msg: "Delete Success" });
};
module.exports = { createTodo, getAllTodo, getTodo, updateTodo, deleteTodo };
