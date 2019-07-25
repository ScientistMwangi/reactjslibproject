import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
//import Counters from "./counters";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
      { id: 4, value: 4 }
    ]
  };

  //parent handler event
  handleDelete = id => {
    const counters = this.state.counters.filter(c => c.id !== id);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handlerIncrement = counter => {
    const counters = this.state.counters;
    const index = counters.indexOf(counter);

    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  //{this.state.counters.filter(c => c.value > 0).length}
  render() {
    return (
      <React.Fragment>
        <Navbar>totalCounters ={this.state.counters.length}</Navbar>
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onIncrement={this.handlerIncrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
