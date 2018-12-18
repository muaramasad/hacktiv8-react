import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      person: [],
    }
  }
  componentDidMount(){
    // axios
    //   .get("https://swapi.co/api/people")
    //   .then(response => {
    //     return response.data.results;
    //   })
    //   .then(person => {
    //     return person.filter(p => {
    //       return p.height > 160
    //     })
    //   })
    //   .then(person => {
    //     this.setState({
    //       person: person
    //     })
    //   });

    axios
      .get("https://swapi.co/api/people")
      .then(response => response.data.results)
      .then(person => person.filter(p => p.height > 160))
      .then(person => this.setState({person: person,}))

    const data = axios.get("https://swapi.co/api/people");
    console.log(data);
  }
  render() {
    return (
      <div className="App">
        {
          this.state.person.map( p =>
            <div>
              {p.name}
            </div>
        )}
      </div>
    );
  }
}

export default App;
