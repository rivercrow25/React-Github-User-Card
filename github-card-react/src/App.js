import React from 'react';
import axios from 'axios'
import MainCard from './component/MainCard'
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
        // console.log(response)
        this.setState({
          data: response.data
        })
      })
      .then(error => {
        console.log(error)
      })
  }

  render() {

    return (
      <div className="App">
        <h1>github friends!</h1>
        <MainCard data={this.state.data} />

      </div>
    );
  }
}

export default App;
