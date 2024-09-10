import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import EditTodo from "./components/EditTodo/EditTodo";

const App = () => {
  return (

        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/edit/:id" element={<EditTodo />} />
          </Routes>
        </Router>

  );
};

export default App;
