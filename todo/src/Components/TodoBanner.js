import React, { Component } from 'react'
import {Container, Navbar, Badge} from 'react-bootstrap'


export default class TodoBanner extends Component {
    render() {
        return (
            <div>
                
                    <h4 className="bg-primary text-white text-center p-2" fixed="bottom">
                        {this.props.name} To Do List's
                        ( <Badge variant="light">{this.props.tasks.filter(t => !t.done).length}</Badge> items to do.)
                    </h4>
                   
                
            </div>
        )
    }
}
