import React from 'react'


class MainCard extends React.Component {
    constructor() {
        super()
    }
    render() {
        console.log('inside main card ', this.props)
        return (
            <div>
                <img src={this.props.data.avatar_url} alt='pciture of user' />
                <div>
                    <h2>User: {this.props.data.login}</h2>
                    <h3>Name: {this.props.data.name}</h3>
                    <p>Repositorys: {this.props.data.public_repos}</p>
                    <p>followers: {this.props.data.followers}</p>
                    <p>following: {this.props.data.following}</p>
                </div>
            </div>
        )
    }
}

export default MainCard