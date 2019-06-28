import React, {Component} from 'react'
import CardList from './CardList'
import {robots} from './robots'
import SearchBox from './SearchBox'

class App extends Component {

    constructor(){
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (e) => {
        this.setState({ searchfield: e.target.value})
        
    }
    render(){
        const filterRobots = this.state.robots.filter(
            robot =>{
                return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
            }
        )
        return (
            <div className="tc">
                <h1 className="bg-black-05 pa3 ma0 light-green">RobotFriends</h1>
                <SearchBox SearchChange={this.onSearchChange}/>
                <CardList R={filterRobots}/>
            </div>
        )
    }
    
}

export default App
