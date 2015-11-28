import React from "react";

export class About extends React.Component {

  handleClick() {
    console.log(arguments);
  }

  render() {
    return (
      <h1 onClick={this.handleClick}>About page!!!</h1>
    );
  }
}
