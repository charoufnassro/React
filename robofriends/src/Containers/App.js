import React, {Component} from 'react'
import CardList from '../Components/CardList'
import SearchBox from '../SearchBox'
import Scroll from '../Components/Scroll'
import ErrorBoundry from '../Components/ErrorBoundry'

class App extends Component {

    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then( response => response.json() )
            .then( users => this.setState({ robots: users }) )
    }

    onSearchChange = (e) => {
        this.setState({ searchfield: e.target.value})
        
    }
    render(){
        const {robots, searchfield} = this.state
        const filterRobots = robots.filter(
            robot =>{
                return robot.name.toLowerCase().includes(searchfield.toLowerCase())
            }
        )
        return (
            <div className="tc">
                <h1 className="bg-black-05 pa3 ma0 light-green">RobotFriends</h1>
                <SearchBox SearchChange={this.onSearchChange}/>
                {
                    !robots.length
                        ? 
                            <h2 className="pa3 ma0 light-green">Loading...</h2>
                        : ( <Scroll>
                                <ErrorBoundry>
                                    <CardList R={filterRobots}/>
                                </ErrorBoundry>
                            </Scroll>
                        )
                            
                        }
                
            </div>
        )
    }
    
}

export default App
