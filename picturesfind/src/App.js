import React, {Component} from 'react';
import './App.css';
import ListPicture from './ListPicture'
import {pictures} from './pictures'
import BoxSearch from './BoxSearch'
import ShowPlus from './ShowPlus'

class App extends Component {

  constructor(){
    super()
    this.state = {
      pictures: pictures,
      searchfield: ''
    }
  }

  onSearchChange = (e) => {
    
    this.setState({
      searchfield: e.target.value
    })
  }

  render(){
    let picturesfilter = this.state.pictures.filter(
      picture => {
        return picture.author.toLowerCase().includes(this.state.searchfield.toLowerCase())
      }
    )

    
    return (
      <div className="tc">
        <h1 className="pa3 fw8 bg-white-80 light-green fixed top-0 left-0 right-0 z-999 mt0  ">Pictures Find</h1>
        <BoxSearch onSearchChange={this.onSearchChange}/>
        <span className="mb6  db"></span>
        <ListPicture p={picturesfilter}/>
        <ShowPlus onShowPlus={this.onShowPlus}/>        
      </div>
    );
    }
  
}

export default App;
