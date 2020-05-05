import React, { Component } from "react";
import "./ToDoFilter.css";

class ToDoFilter extends Component {
  render() {
    return (
      <div className="btn-group">
        <button type="button" className="btn btn-secondary">
          Весь список дел
        </button>
        <button type="button" className="btn btn-secondary">
          В процессе выполнения
        </button>
        <button type="button" className="btn btn-secondary">
          Выполненные
        </button>
      </div>
    );
  }
}
export default ToDoFilter;
