import React, { Component } from "react";

export class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  } 

  componentDidMount = () => {
      this.timer = setInterval(this.increment,1000)
    }
   

  increment = () => {
  
    const baseNumber = this.state.count;
    this.setState({ count:baseNumber + 1 })

  }

  render() {
      return ( <div>
          <h1>You have spent {this.state.count} seconds on this Page</h1>
     </div>)
  }
    
  };

  export default Timer;