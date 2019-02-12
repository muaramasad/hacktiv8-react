import React, { Component } from 'react';
import {  BrowserRouter as Router,  Route, Switch } from 'react-router-dom';
import Home from './units/Home';
import Events from './units/Events';
import Artists from './units/Artists';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/artists" component={Artists} />
          <Route path="/events" component={Events} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
