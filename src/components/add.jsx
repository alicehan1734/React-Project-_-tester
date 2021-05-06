import React, { Component } from "react";

class Add extends Component {
  inputRef = React.createRef();

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();

    const name = this.inputRef.current.value;
    name && this.props.handleadd(name);
    this.inputRef.current.value = "";
  };

  render() {
    return (
      <form className="add-form" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type="text"
          className="add-input"
          placeholder="habit"
        />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default Add;
