import React from "react";
import {Link} from 'react-router';

export class Main extends React.Component {

  handleClick() {
    console.log(arguments);
  }

  render() {
    return (
      <div>
        <Link to='about'>Go to About</Link>
        <br />
        {this.props.children}
      </div>
    );
  }
}
