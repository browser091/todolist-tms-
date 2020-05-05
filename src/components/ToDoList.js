import React, { Component } from "react";
import "./ToDoList.css";
import ToDoLisitem from "./ToDoListitem";

class ToDoList extends Component {
  render() {
    const { todos } = this.props;
    const elements = todos.map((item) => {
      const { id, ...itemProps } = item;
      return (
        <li key={id} className="list-group-item todo-list">
          <ToDoLisitem {...itemProps} />
        </li>
      );
    });

    return <ul className="list-group ">{elements}</ul>;
  }
}

export default ToDoList;
