import React, { Component } from "react";
import "./ToDoListitem.css";

class ToDoLisitem extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     done: false,
  //   };
  // }

  render() {
    const { label, onDeleted, onToggleDone, done } = this.props;
    let classNames = "todo-list-item";
    if (done) {
      classNames += " done";
    }

    return (
      <span className={classNames}>
        <button
          type="button"
          className="btn btn-outline-success btn-sm float-left done"
          onClick={onToggleDone}
        >
          <i className="fa fa-check-circle-o done" />
        </button>
        <span className="todo-list-item-label ">{label}</span>
        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={onDeleted}
        >
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}

export default ToDoLisitem;
