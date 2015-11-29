import React from "react";
import {Main} from "./../frontend/main";
import {About} from "./../frontend/about";
import {Index} from "./../frontend/index";

export default {
  path: '/',
  component: Main,
  indexRoute: { component: Index },
  childRoutes: [
    { path: 'about', component: About },
  ]
}