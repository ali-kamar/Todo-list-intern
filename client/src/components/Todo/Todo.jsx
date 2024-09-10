import React from "react";
import { useNavigate } from "react-router-dom";
const Todo = ({ todo, handleDelete }) => {
  const { todo_id, description } = todo;
  const navigate = useNavigate()
  return (
    <div className="flex justify-between bg-purple-700 m-3 p-2 items-center ">
      {todo.completed && (
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="25"
            viewBox="0 0 16 16"
          >
            <path
              fill="currentColor"
              d="M1.5 8a6.5 6.5 0 1 1 13 0A.75.75 0 0 0 16 8a8 8 0 1 0-8 8a.75.75 0 0 0 0-1.5A6.5 6.5 0 0 1 1.5 8"
            />
            <path
              fill="currentColor"
              d="m8.677 12.427l2.896 2.896a.25.25 0 0 0 .427-.177V13h3.25a.75.75 0 0 0 0-1.5H12V9.354a.25.25 0 0 0-.427-.177l-2.896 2.896a.25.25 0 0 0 0 .354M11.28 6.78a.749.749 0 1 0-1.06-1.06L7.25 8.689L5.78 7.22a.749.749 0 1 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0z"
            />
          </svg>
        </span>
      )}
      <p className={`text-sm ${todo.completed ? "line-through" : ""} `}>{description}</p>
      <div className="btns">
        <button className="edit" onClick={() => navigate(`/edit/${todo_id}`)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="25"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h8.925l-2 2H5v14h14v-6.95l2-2V19q0 .825-.587 1.413T19 21zm4-6v-4.25l9.175-9.175q.3-.3.675-.45t.75-.15q.4 0 .763.15t.662.45L22.425 3q.275.3.425.663T23 4.4t-.137.738t-.438.662L13.25 15zM21.025 4.4l-1.4-1.4zM11 13h1.4l5.8-5.8l-.7-.7l-.725-.7L11 11.575zm6.5-6.5l-.725-.7zl.7.7z"
            />
          </svg>
        </button>
        <button className="delete" onClick={() => handleDelete(todo_id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="25"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM9 17h2V8H9zm4 0h2V8h-2zM7 6v13z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Todo;