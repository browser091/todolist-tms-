import React, { Component } from "react";
import "./ToDoHeader.css";

class ToDoHeader extends Component {
  render() {
    const { toDo, done } = this.props;
    return (
      <div className="todo-header">
        <h1> Планировщик дел</h1>
        <h2>
          Запланировано {toDo} дел(о); Выполнено {done}.
        </h2>
      </div>
    );
  }
}
export default ToDoHeader;
