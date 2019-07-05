import React, { Component } from 'react'
import {Row, Col, Button} from 'react-bootstrap'

export default class TodoCreator extends Component {
    constructor(props){
        super(props)
        this.state={ newItemText: ""}
    }

    updateNewTextValue = (e) => {
        this.setState({
            newItemText: e.target.value
        })
    }

    createNewTodo = () => {
        this.props.callback(this.state.newItemText)
        this.setState({ newItemText: ""})
    }
    render() {
        return (
            <div className='my-1'>
                <Row>
                    <Col xs={12} md={10} lg={10}>
                    <input className='form-control' value={this.state.newItemText} onChange={this.updateNewTextValue} />
                    </Col>
                    <Col xs={12} md={2} lg={2}>
                    <Button className='btn btn-primary ' block onClick={this.createNewTodo}>Add</Button>
                    </Col>
                </Row>
            </div>
        )
    }
}
