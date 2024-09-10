import React, { useEffect, useState } from "react";
import AddTodo from "../Add-Todo/AddTodo";
import axios from "../../api/axios";
import Todo from "../Todo/Todo";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all"); // Added filter state

  // Fetch todos based on filter
  const fetchTodos = async (status = "") => {
    try {
      const result = await axios.get("todos", {
        params: { status }, // Send the status as a query parameter
      });
      setTodos(result.data); // Assuming result.data contains the todos
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  useEffect(() => {
    fetchTodos(); // Fetch all todos by default
  }, []);

  useEffect(() => {
    fetchTodos(filter); // Fetch todos based on the current filter
  }, [filter]);

  const addNewTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`todos/${id}`);
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.todo_id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <div className="container w-full flex justify-center items-center h-screen">
      <div className="card">
        <h1 className="text-2xl font-bold my-5">Get Things Done!</h1>
        <div className="flex justify-between p-2 mb-3 px-8">
          <button
            className={`bg-purple-700 p-1 px-4 rounded ${
              filter === "all" ? "bg-purple-900" : ""
            }`}
            onClick={() => setFilter("all")}
          >
            All
          </button>

          <button
            className={`bg-purple-700 p-1 rounded ${
              filter === "completed" ? "bg-purple-900" : ""
            }`}
            onClick={() => setFilter("completed")}
          >
            Completed
          </button>

          <button
            className={`bg-purple-700 p-1 rounded ${
              filter === "active" ? "bg-purple-900" : ""
            }`}
            onClick={() => setFilter("active")}
          >
            Active
          </button>
        </div>
        <AddTodo onAddTodo={addNewTodo} />
        <div className="todos mb-8">
          {todos.map((todo) => (
            <Todo key={todo.todo_id} todo={todo} handleDelete={handleDelete} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
