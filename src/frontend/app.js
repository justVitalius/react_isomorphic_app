import React from "react";
import {render} from 'react-dom';
import {Router, Route} from "react-router";
import createBrowserHistory from '../../node_modules/history/lib/createBrowserHistory'
import routes from "./../shared/routes";

render(<Router history={createBrowserHistory()} routes={routes}/>, document.getElementById('app'));