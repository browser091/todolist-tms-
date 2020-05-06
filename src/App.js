import React, { Component } from "react";
import "./App.css";
import ToDoHeader from "./components/ToDoHeader";
import ToDoSearch from "./components/ToDoSearch";
import ToDoList from "./components/ToDoList";
import ToDoFilter from "./components/ToDoFilter";
import ToDoAdditem from "./components/ToDoAdditem";

class App extends Component {
  maxId = 100;
  state = {
    todoData: [],
    term: "",
    filter: "all",
  };

  componentDidMount() {
    try {
      const todoData = JSON.parse(localStorage.getItem("todoDate"));
      this.setState({
        todoData,
      });
    } catch (err) {
      console.error(err);
    }
  }
  componentDidUpdate() {
    this.saveLocalStorege();
  }

  createToDoItem(label) {
    return {
      label,
      done: false,
      id: Date.now(),
    };
  }
  onAdditem = (text) => {
    const newItem = this.createToDoItem(text);

    this.setState(({ todoData }) => {
      const newArry = [...todoData, newItem];
      return {
        todoData: newArry,
      };
    });
  };
  deletItem = (id) => {
    const { todoData } = this.state;
    this.setState({
      todoData: todoData.filter((item) => item.id !== id),
    });
  };
  onToggleDone = (id) => {
    console.log(id);
    console.log("togglr done", id);
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((item) => item.id === id);
      console.log(idx);
      const oldItem = todoData[idx];
      const newItem = { ...oldItem, done: !oldItem.done };
      const newArry = [
        ...todoData.splice(0, idx),
        newItem,
        todoData.splice(idx + 1),
      ];
      return {
        todoData: newArry,
      };
    });
  };

  onSearchChange = (term) => {
    this.setState({ term });
  };
  onFilterChange = (filter) => {
    this.setState({ filter });
  };
  search(items, term) {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  }
  filter(items, filter) {
    switch (filter) {
      case "all":
        return items;
      case "active":
        return items.filter((items) => !items.done);
      case "done":
        return items.filter((items) => items.done);
      default:
        return items;
    }
  }
  saveLocalStorege = () => {
    localStorage.setItem("todoDate", JSON.stringify(this.state.todoData));
  };
  render() {
    const { todoData, term, filter } = this.state;
    const filtreItems = this.filter(this.search(todoData, term), filter);
    const doneCount = this.state.todoData.filter((el) => el.done).length;
    const todoCount = this.state.todoData.length - doneCount;
    return (
      <div className="todo-app">
        <ToDoHeader toDo={todoCount} done={doneCount} />
        <ToDoAdditem onAdditem={this.onAdditem} />
        <ToDoSearch onSearchChange={this.onSearchChange} />
        <ToDoList
          todos={filtreItems}
          onDeleted={this.deletItem}
          onToggleDone={this.onToggleDone}
        />
        <ToDoFilter filter={filter} onFilterChange={this.onFilterChange} />
      </div>
    );
  }
}

export default App;
