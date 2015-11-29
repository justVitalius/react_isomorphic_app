import React from "react";
import {Link} from 'react-router';

export class Index extends React.Component {

  handleClick() {
    console.log(arguments);
  }

  render() {
    return (
      <h1>Index page</h1>
    );
  }
}
