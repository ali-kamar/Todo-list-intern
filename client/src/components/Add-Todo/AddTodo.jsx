import React, { useState } from "react";
import axios from "../../api/axios";

const AddTodo = ({ onAddTodo }) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("todos", { description: todo });
      onAddTodo(result.data);
      setTodo("");
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  return (
    <form className="input flex justify-center mb-5" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What is the task today?"
        className="border-2 border-purple-700 bg-transparent p-1 w-64"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        required
      />
      <button type="submit" className="bg-purple-700 p-1">
        Add Task
      </button>
    </form>
  );
};

export default AddTodo;
