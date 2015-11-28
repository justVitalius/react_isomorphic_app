import React from "react";
import {Main} from "./main";
import {About} from "./about";
import {Index} from "./index";

export default {
  path: '/',
  component: Main,
  indexRoute: { component: Index },
  childRoutes: [
    { path: 'about', component: About },
  ]
}