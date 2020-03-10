import React from 'react';
import axios from 'axios'
import MainCard from './component/MainCard'
import FollowersList from './component/FollowersList'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: {},
      user: ''
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
  }

  handleChange = event => {
    this.setState({
      user: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    axios.get(`https://api.github.com/users/${this.state.user}`)
      .then(response => {
        this.setState({
          data: response.data,
          user: response.data.login
        })
      })
  }

  // componentDidUpdate(PrevState) {
  //   if (PrevState.data !== this.state.data) {
  //     axios.get(`https://api.github.com/users/${this.state.user}`)
  //       .then(response => {
  //         // console.log(response)
  //         this.setState({
  //           data: response.data
  //         })
  //       })
  //   }
  // }

  render() {

    return (
      <div className="App">
        <h1>github friends!</h1>
        <form>
          <label htmlFor='user'>Search Github Users</label>
          <input onChange={this.handleChange} name='user' value={this.state.user} placeholder='Search users' />
          <button onClick={this.handleSubmit}>search</button>
        </form>
        <MainCard data={this.state.data} />
        <h2>Followers</h2>
        <FollowersList user={this.state} />
      </div>
    );
  }
}

export default App;
