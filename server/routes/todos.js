const express = require("express");

const router = express.Router();
const {
  createTodo,
  getAllTodo,
  getTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todos");

router.route("/").post(createTodo).get(getAllTodo);

router.route("/:id").get(getTodo).delete(deleteTodo).patch(updateTodo);

module.exports = router;
