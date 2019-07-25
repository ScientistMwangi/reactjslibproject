import React, { Component } from "react";

import Counter from "./counter";
import Header from "./header";

class Counters extends Component {
  render() {
    //console.log(this.handleDelete);
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.props.onReset}
        >
          Rest
        </button>
        <br />

        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            value={counter.value}
            selected={true}
            onDelete={() => this.props.onDelete(counter.id)}
            handlerIncrement={this.props.onIncrement}
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
}

export default Counters;
