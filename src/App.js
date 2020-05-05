import React, { Component } from "react";
import "./App.css";
import ToDoHeader from "./components/ToDoHeader";
import ToDoSearch from "./components/ToDoSearch";
import ToDoList from "./components/ToDoList";
import ToDoFilter from "./components/ToDoFilter";

class App extends Component {
  state = {
    todoData: [
      { label: "drink coffee", important: false, id: 1 },
      { label: "bla bla 2", important: true, id: 2 },
      { label: "bla bla 3", important: false, id: 3 },
    ]
  }

  deletItem = (id) => {
    this.setState((state) => {
      const indx = state.todoData.findIndex((el) => el.id === id);
      console.log(indx)
      // todoData.splice(indx, 1);
      // return {
      //   todoData: todoData
      // }
    }
    )
  }
  render() {
    return (
      <div className="todo-app">
        <ToDoHeader toDo={1} done={3} />
        <ToDoSearch />
        <ToDoList todos={this.state.todoData} onDeleted={this.deletItem} />
        <ToDoFilter />
      </div>
    );
  }
}

export default App;
