// import React, { Component } from 'react';
// import {  BrowserRouter as Router,  Route, Switch } from 'react-router-dom';
// import Homepage from './units/Homepage';
// import CreateMeetup from './units/CreateMeetUp';
// import Explore from './units/Explore';

// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <Switch>
//           <Route path="/create-meetup" component={() => <CreateMeetup title={'Create Meetup'}/>} />
//           <Route path="/explore" component={() => <Explore title={'Explore'}/>} />
//           <Route path="/" component={Homepage} />
//         </Switch>
//       </Router>
//     );
//   }
// }

// export default App;


import React, {Component} from 'react'

import './App.css'
import Home from './Home'

export default class App extends Component {
  render() {
    return (
        <Home />
    )
  }
}
