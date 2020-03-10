import React from 'react';
import axios from 'axios'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: {}
    }
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/rivercrow25')
      .then(response => {
        this.setState({
          data: response.data
        })
      })
      .then(error => {
        console.log(error)
      })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <h1>github friends!</h1>

      </div>
    );
  }
}

export default App;
