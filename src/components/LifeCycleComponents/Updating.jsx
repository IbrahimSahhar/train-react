import React, { Component } from "react";

export default class Updating extends Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: "red" };
  }

  /* 
Also at updates the getDerivedStateFromProps method is called. This is the first method that is called when a component gets updated.

This is still the natural place to set the state object based on the initial props.

The example below has a button that changes the favorite color to blue, but since the getDerivedStateFromProps() method is called, which updates the state with the color from the favcol attribute, the favorite color is still rendered as yellow:
  */
  static getDerivedStateFromProps(props, state) {
    return { favoritecolor: props.favcol };
  }
  changeColor = () => {
    this.setState({ favoritecolor: "blue" });
  };

  /*
In the shouldComponentUpdate() method you can return a Boolean value that specifies whether React should continue with the rendering or not.

The default value is true.
  */
  shouldComponentUpdate() {
    return false;
  }

  /*
  In the getSnapshotBeforeUpdate() method you have access to the props and state before the update, meaning that even after the update, you can check what the values were before the update.

If the getSnapshotBeforeUpdate() method is present, you should also include the componentDidUpdate() method, otherwise you will get an error.
  */
  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div1").innerHTML =
      "Before the update, the favorite was " + prevState.favoritecolor;
  }
  //The componentDidUpdate method is called after the update has been rendered in the DOM:

  componentDidUpdate() {
    document.getElementById("div2").innerHTML =
      "The updated favorite is " + this.state.favoritecolor;
  }
  /* The render() method is of course called when a component gets updated, it has to re-render the HTML to the DOM, with the new changes.*/
  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <button type="button" onClick={this.changeColor}>
          Change color
        </button>
        <div id="div1"></div>
        <div id="div2"></div>
      </div>
    );
  }
}
