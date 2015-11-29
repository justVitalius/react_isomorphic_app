import React from "react";
import {RouteHandler} from 'react-router';
import { match, RoutingContext } from 'react-router'

export class Container extends React.Component {

  render() {
    return (
      /*<html>
        <head>
          <title>Isomorphic App</title>
        </head>
        <body>
          <div id="app">*/
            <RoutingContext {...this.props} />
          /*</div>
          <script src='http://localhost:8080/static/app.js' defer="true" async="true" />
        </body>
      </html>*/
    );
  }
}