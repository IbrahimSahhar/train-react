import React, { Component } from "react";

export default class Mounting extends Component {
  /* this is constructor  :  is called before anything else , 
    when the component is initiated, and it is the natural place to set up the initial state 
    and other initial values , 
    The constructor() method is called with the props, as arguments, and you should always start by calling the super(props) before anything else,
     this will initiate the parent's constructor method and allows the component to inherit methods from its parent (React.Component).
     */
  constructor(props) {
    super(props);
    this.state = { favColor: "red" };
    // state = { favColor :'red' };
  }

  /*
   The getDerivedStateFromProps() method is called right before rendering the element(s) in the DOM.

   This is the natural place to set the state object based on the initial props.

   It takes state as an argument, and returns an object with changes to the state.

   The example below starts with the favorite color being "red", but the getDerivedStateFromProps() method updates the favorite color based on the favcol attribute:
  */
  /*
   The componentDidMount() method is called after the component is rendered.

   This is where you run statements that requires that the component is already placed in the DOM.
  */
  componentDidMount() {
    console.log("mounting component");
  }
  static getDerivedStateFromProps(props, state) {
    return { favColor: props.favcol };
  }
  //The render() method is required, and is the method that actually outputs the HTML to the DOM.
  render() {
    return <h1>My Favorite Color is {this.state.favColor}</h1>;
  }
}
