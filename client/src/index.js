import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import App from './App';
import Town from './containers/town';
import Village from './containers/village';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
        <Route exact path="/" component={App} />
        <Route path="/town" component={Town} />
        <Route path="/village" component={Village} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);