import React, { Component } from "react";

class Counter extends Component {
  // INTRODUCING this KEY WORD INSIDE A FUNCTION
  //   constructor() {
  //     super();
  //     this.handlerIncrement = this.handlerIncrement.bind(this);
  //   }

  componentDidMount() {
    console.log(this.props);
  }

  state = {
    // count: this.props.value,
    tags: ["tag1"]
  };
  styles = {
    fontSize: 20,
    fontWeight: "bold"
  };
  render() {
    //components properties
    //console.log("props", this.props);

    return (
      <React.Fragment>
        <span style={this.styles} className={this.badgeClass()}>
          {this.formatCount()}
        </span>

        <span>{this.props.children}</span>
        {/* <span>{this.props.children.props.children}</span> */}

        <button
          onClick={() => this.props.handlerIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        <button
          onClick={() => this.handlerIncrementWithParam(1, "samuel")}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment with Argument
        </button>

        <button
          className="btn btn-danger m-2 btn-small"
          onClick={() => this.props.onDelete(this.props.value)}
        >
          Delete
        </button>

        {this.state.tags.length === 0 && "No tags..."}
        {this.unorderList()}
      </React.Fragment>
    );
  }

  unorderList() {
    if (this.state.tags.length === 0)
      return <p>No tag...be the first to add</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>tag</li>
        ))}
      </ul>
    );
  }

  badgeClass() {
    let badgeClasses = "badge m-2 badge-";
    badgeClasses += this.props.value === 0 ? "warning" : "primary";
    return badgeClasses;
  }

  formatCount() {
    return this.props.value === 0 ? "Zero " : this.props.value;
  }
  // USE OF this KEY WORD DEFINED ON THE CONSTRUCTOR FUNCTION
  //   handlerIncrement() {
  //     console.log("Increment fxn", this);
  //   }

  // handlerIncrement = () => {
  //   //wont work you have to notify the state of the changes
  //   //this.state.count++;
  //   //console.log("Increment fxn", this);
  //   this.setState({ count: this.props.Counter.count + 1 });
  // };
  handlerIncrementWithParam = (myparam, name) => {
    //wont work you have to notify the state of the changes
    //this.state.count++;
    //console.log("Increment fxn", this);
    console.log(myparam + " name: " + name);
    this.setState({ count: this.props.value + 1 });
  };
}

export default Counter;
