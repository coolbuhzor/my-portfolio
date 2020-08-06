import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
/* the react mdl is a bootstrap like library and below are the links. one other link is at the index.html*/
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
/*we remove react strict mode and put browser router. we had to install the router shii. the router is what allows us to switch between links in react*/
  <BrowserRouter>
    <App />
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
