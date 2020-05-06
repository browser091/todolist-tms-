import React, { Component } from "react";
import "./ToDoAdditem.css";

const ENTER_KEY = 13;
class ToDoAdditem extends Component {
  state = {
    label: "",
  };
  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdditem(this.state.label);
    this.setState({
      label: "",
    });
  };

  handleKeyDown = (e) => {
    if (e.keyCode === ENTER_KEY) {
      e.preventDefault();
      this.props.onAdditem(this.state.label);
      this.setState({
        label: "",
      });
    }
  };
  render() {
    return (
      <form className="todo-add-item" onSubmit={this.onSubmit}>
        <textarea
          type="text"
          className="form-control form-add "
          placeholder="Добаваить новое действие в планировщик..."
          onChange={this.onLabelChange}
          value={this.state.label}
          onKeyDown={this.handleKeyDown}
        />
        <button className="btn btn-outline-secondary  btn-add">Добавить</button>
      </form>
    );
  }
}
export default ToDoAdditem;
