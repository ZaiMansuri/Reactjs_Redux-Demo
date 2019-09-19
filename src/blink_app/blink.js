
import React, { Component } from 'react';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    // Toggle the state every half second
    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText };
      });
    }, 1000);
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <div>{display}</div>
    );
  }
}


export default class AppBlink extends Component {
  render() {
    return (
      <div className="App-bg">
        <Blink text='blinking is good' />
        <Blink text='hi, have a good day' />
        <Blink text='this is done in React ' />
        <Blink text='Blink Blink Blink ' />
      </div>
    );
  }
}
