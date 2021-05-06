import React, { Component } from "react";
import Habits from "./components/habits";
import "./app.css";
import Header from "./components/header";

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  increment = habit => {
    // console.log(habit);
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits: habits });
  };

  decrement = habit => {
    // console.log(habit.id);
    // console.log(habit);

    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    console.log(index);

    const count = habits[index].count - 1;
    console.log(count);

    habits[index].count = count < 0 ? 0 : count;
    this.setState({ habits: habits });
  };

  delete = habit => {
    // console.log(habit);

    const habits = this.state.habits.filter(item => item.id !== habit.id);

    this.setState({ habits });
  };

  handleadd = name => {
    const namearray = [
      ...this.state.habits,
      { id: Date.now(), name: name, count: 0 },
    ];
    this.setState({ habits: namearray });
  };

  onClick = () => {
    const name = this.state.habits.map(habit => {
      habit.count = 0;
      return habit;
    });

    this.setState({ habits: name });
  };

  render() {
    return (
      <div className="searchbar">
        <Header name={this.state.habits.filter(item => item.count > 0)} />
        <Habits
          habits={this.state.habits}
          onIncrement={this.increment}
          onDecrement={this.decrement}
          onDelete={this.delete}
          onAdd={this.handleadd}
        />
        <button onClick={this.onClick}> reset </button>
      </div>
    );
  }
}

export default App;
