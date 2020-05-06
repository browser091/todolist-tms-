import React, { Component } from "react";
import "./ToDoFilter.css";

class ToDoFilter extends Component {
  buttons = [
    { name: "all", label: "Все дела" },
    { name: "active", label: "Активные " },
    { name: "done", label: "Выполненные " },
  ];
  render() {
    const { filter, onFilterChange } = this.props;
    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name;
      const dopClass = isActive ? "btn-dark" : "btn-secondary";
      return (
        <button
          type="button"
          className={`btn ${dopClass}`}
          key={name}
          onClick={() => onFilterChange(name)}
        >
          {label}
        </button>
      );
    });
    return <div className="btn-group">{buttons}</div>;
  }
}
export default ToDoFilter;
