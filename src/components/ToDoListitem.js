import React, { Component } from "react";
import "./ToDoListitem.css";

class ToDoLisitem extends Component {
  constructor() {
    super();
    this.state = {
      done: false,
    };
  }
  onLableClick = () => {
    this.setState({ done: !this.state.done });
  };
  render() {
    const { label } = this.props;
    const { done } = this.state;
    let classNames = "todo-list-item";
    if (done) {
      classNames += " done";
    }

    return (
      <span className={classNames}>
        <button
          type="button"
          className="btn btn-outline-success btn-sm float-left done"
          onClick={this.onLableClick}
        >
          <i className="fa fa-check-circle-o done" />
        </button>
        <span className="todo-list-item-label ">{label}</span>
        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
        >
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}

export default ToDoLisitem;
