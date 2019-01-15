import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Button from '@material-ui/core/Button';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      people: {},
      page: 'https://swapi.co/api/people'
    }
  }
  componentDidMount(){
    axios
      .get(this.state.page)
      .then(response => {
          this.setState({
            people: response.data
          })
      })
  }
  nextpage(){
    this.setState({
      page: this
    })
  }
  render() {
    console.log(this.state.people.results)
    return (
        <div>
          <Button color="secondary" variant="contained">
            Next Page
          </Button>
        </div>
    );
  }
}

export default App;
