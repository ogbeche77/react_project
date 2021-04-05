import React, { Component } from "react"; //class base component
import PropTypes from "prop-types";

export class AddTodo extends Component {
  state = {
    title: "",
  };
  onSubmit = (e) => {
    e.preventDefault(); // to prevent form from submitting the actual file
    this.props.addTodo(this.state.title);
    this.setState({ title: " " });
  };

  //ensures item can be added to todo list with setstate
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          className="inputBar"
          placeholder="Add Todo..."
          value={this.state.title}
          onChange={this.onChange}
        />
        <input type="submit" value="submit" className="btn" />
      </form>
    );
  }
}

//Proptypes
AddTodo.propTypes = {
  addtodo: PropTypes.func.isRequired,
};

export default AddTodo;
