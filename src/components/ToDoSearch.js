import React, { Component } from "react";
import "./ToDoSearch.css";

class ToDoSearch extends Component {
  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Поиск по запланированным делам..."
      />
    );
  }
}
export default ToDoSearch;
