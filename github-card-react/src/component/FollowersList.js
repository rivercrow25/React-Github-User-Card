import React from 'react'
import axios from 'axios'
import FollowerCard from './FollowersCard'

class FollowersList extends React.Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        axios.get(`https://api.github.com/users/rivercrow25/followers`)
            .then(response => {
                console.log(response)
                this.setState({
                    data: response.data
                })
            })
    }

    // componentDidUpdate(prevProps){
    //     if (prev)
    // }

    render() {
        console.log('inside list render', this.props)
        return (
            <div className='followers'>
                {this.state.data.map(item => (
                    <FollowerCard key={item.id} data={item} />
                ))}
            </div>
        )
    }
}

export default FollowersList