import React from "react";

class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleReset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div>
        <h1>Class Counter</h1>
        <p>{this.state.count}</p>
        <button onClick={this.handleClick}> increase class counter</button>
        <button onClick={this.handleReset}>reset count</button>
      </div>
    );
  }
}

export default ClassCounter;
