import React, { Component } from "react";
import "./ToDoSearch.css";

class ToDoSearch extends Component {
  state = {
    term: "",
  };
  onSearchChange = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onSearchChange(term);
  };

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Поиск по запланированным делам..."
        value={this.state.term}
        onChange={this.onSearchChange}
      />
    );
  }
}
export default ToDoSearch;
