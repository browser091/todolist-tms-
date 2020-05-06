import React, { Component } from "react";
import "./ToDoList.css";
import ToDoLisitem from "./ToDoListitem";

class ToDoList extends Component {
  render() {
    const { todos, onDeleted, onToggleDone } = this.props;
    const elements = todos.map((item) => {
      const { id, ...itemProps } = item;
      return (
        <li key={id} className="list-group-item todo-list">
          <ToDoLisitem
            {...itemProps}
            onDeleted={() => onDeleted(id)}
            onToggleDone={() => onToggleDone(id)}
          />
        </li>
      );
    });

    return <ul className="list-group ">{elements}</ul>;
  }
}

export default ToDoList;
