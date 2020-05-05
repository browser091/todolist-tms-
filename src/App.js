import React from "react";
import "./App.css";
import ToDoHeader from "./components/ToDoHeader";
import ToDoSearch from "./components/ToDoSearch";
import ToDoList from "./components/ToDoList";
import ToDoFilter from "./components/ToDoFilter";

function App() {
  const todoData = [
    { label: "drink coffee", important: false, id: 1 },
    { label: "bla bla 2", important: true, id: 2 },
    { label: "bla bla 3", important: false, id: 3 },
  ];
  return (
    <div className="todo-app">
      <ToDoHeader toDo={1} done={3} />
      <ToDoSearch />
      <ToDoList todos={todoData} />
      <ToDoFilter />
    </div>
  );
}

export default App;
