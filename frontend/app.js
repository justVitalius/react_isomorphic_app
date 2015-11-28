import React from "react";
import {render} from 'react-dom';
import {Router, Route} from "react-router";
import createBrowserHistory from 'history/lib/createBrowserHistory'
import routes from "./routes";

render(<Router history={createBrowserHistory()} routes={routes}/>, document.getElementById('app'));