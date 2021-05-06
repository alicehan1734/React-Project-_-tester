import React, { Component } from "react";
import Add from "./add";
import Habit from "./habit";

class Habits extends Component {
  increment = habit => {
    this.props.onIncrement(habit);
  };

  decrement = habit => {
    this.props.onDecrement(habit);
  };

  delete = habit => {
    this.props.onDelete(habit);
  };

  handleadd = name => {
    console.log(name + "sdfsdfddddddddddd");
    this.props.onAdd(name);
  };

  render() {
    let name = this.props.name;

    console.log(name);

    return (
      <div>
        <Add handleadd={this.handleadd} />
        <ul>
          {this.props.habits.map(habit => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.increment}
              onDecrement={this.decrement}
              onDelete={this.delete}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Habits;
