import express from "express";
import React from 'react';
import {renderToString} from "react-dom/server";
import { match } from 'react-router'


import routes from "../shared/routes";
import {Container} from '../frontend/container';

const app = express();
// set up Jade
app.set('views', __dirname + '/../../src/views');
app.set('view engine', 'jade');



app.get('/*', function (req, res) {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      res.render('index', {content: renderToString(<Container {...renderProps} />) });
    } else {
      res.status(404).send('Not found')
    }
  })
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});