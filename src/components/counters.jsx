import React, { Component } from "react";

import Counter from "./counter";
import Header from "./header";
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
      { id: 4, value: 4 }
    ]
  };
  render() {
    //console.log(this.handleDelete);
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.handleReset}
        >
          Rest
        </button>
        <br />

        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            value={counter.value}
            selected={true}
            onDelete={this.handleDelete}
            handlerIncrement={this.handlerIncrement}
            id={counter.id}
            //pass the whole counter object
            counter={counter}
          >
            <Header>
              <h1>learning react title</h1>
            </Header>
          </Counter>
        ))}
      </div>
    );
  }

  //parent handler even
  handleDelete = id => {
    console.log("delete fxn from parent " + id);

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

    //counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
}

export default Counters;
