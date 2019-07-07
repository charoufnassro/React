import React, { Component } from 'react'
import {
Row, Col, Button
} from 'react-bootstrap'

import sum, {AdditionFunction} from './sum'

export default class Primer extends Component {

    constructor(props){
        super(props)
        this.state = {
            count : 5
        }
    }

    handleClick = () => {
        this.setState({
            count: this.state.count + 1 
        })
    }

    getClassName = () =>{
       return this.state.count % 2 === 0 ? "bg-warning p-2 font-weight-bolder text-white " : "bg-danger p-2 font-weight-bolder text-white "
    }

    isEven(val) {
        return val % 2 === 0 ? "Even" : "Odd"    } 
    render() {
        
        return (
            <div className='container-fluid p-4 bordered'>
                <Row className={this.getClassName()}>
                    <Col>
                    Value
                    </Col>
                    <Col>
                    Even?
                    </Col>
                </Row>
                <Row className="bg-light text-black-50 font-weight-bold border p-2 text-white ">
                    <Col>
                    {this.state.count}
                    </Col>
                    <Col>
                    {this.isEven(this.state.count)}
                    </Col>
                </Row>
                <Button onClick={this.handleClick} className="m-1" size="sm" variant="info">Click Me</Button>
                <Row className="bg-info text-white text-center p-4 font-weight-bold">
                    {AdditionFunction([10,20,30,50,60])}
                </Row>
            </div>
        )
    }
}
