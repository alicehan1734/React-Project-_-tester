import React, { Component } from "react";

class Header extends Component {
  render() {
    let name = this.props.name.reduce((prev, cur) => {
      return prev + cur.count;
    }, 0);
    console.log(name);

    return (
      <div className="topview">
        <i className="fas fa-leaf"></i>
        <span className="topname">Habit Tracker</span>
        <span className="habit-count main_count">{name}</span>
      </div>
    );
  }
}

export default Header;
