import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
//import Counters from "./counters";
import Counters from "./components/counters";

class App extends Component {
  //constructor called once once the instance of class is created
  //===========COMPONENTS LIFE CYCLE they are very specific to the class//state less functions cant use them============
  //###### MOUNT PHASE
  constructor() {
    super();
    console.log("App-constructor");
    //this.state=this.props.something
    //this.setState is not initialiazed at this stage
  }
  //when the component have been mounted/rendered
  componentDidMount() {
    //good to make ajax calls like this.setState(jsonObject);
    console.log("Mounted ajax call");
  }
  //render(){}

  //######UPDATE PHASE
  componentDidUpdate(prevPros, prevState) {
    console.log("preProps ", prevPros);
    console.log("prevState ", prevState);
  }

  //### UNMOUNT PHASE
  componentWillUnmount() {
    console.log("conponent-unmount");
  }

  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 0 },
      { id: 3, value: 3 },
      { id: 4, value: 0 }
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
    console.log("rendered components together with it's children ");

    let totalCount = this.state.counters.filter(c => c.value > 0).length;

    return (
      <React.Fragment>
        <Navbar totalCount={totalCount} />
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
