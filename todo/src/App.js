import React, {Component} from 'react';
import './App.css';
import { Table, Row, Col } from 'react-bootstrap';
import TodoBanner from './Components/TodoBanner'
import TodoRow from './Components/TodoRow'
import TodoCreator from './Components/TodoCreator'
import VisibilityControl from './Components/VisibilityControl'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      userName: 'Nassro',
      todoItems: [{ action: "Buy Flowrs", done: false},
                  { action: "Get Shors", done: false},
                  { action: "Call Joe", done: false}
                  ],
      showCompleted: true
    }
  }
 

  toggleTodo = (todo) => this.setState({
    todoItems: this.state.todoItems.map(item => item.action === todo.action ? { ...item, done: !item.done} : item)
  })

  createNewTodo = (tasks) => {
    if(!this.state.todoItems.find(item => item.action === tasks)){
      this.setState({
        todoItems: [...this.state.todoItems, { action: tasks, done: false}]
      }, () => localStorage.setItem("todos", JSON.stringify(this.state)))
    }
  }

  todoTableRows = (doneValue) => this.state.todoItems.filter(item => item.done === doneValue).map(item =>  
    <TodoRow key={item.action} item={item} callback={this.toggleTodo} />)

    componentDidMount = () => {
      let data = localStorage.getItem("todos");
      this.setState(data != null ? JSON.parse(data)  : {
        userName: "Nassro",
        todoItems: [{ action: "Buy Flowers", done: false },
                    { action: "Get Shoes", done: false },
                    { action: "Collect Tickets", done: true },
                    { action: "Call Joe", done: false }],
        showCompleted: true
      })
      }

  render(){
    return(
      <div>
          <TodoBanner name={this.state.userName} tasks={this.state.todoItems}/>

          <div className='container-fluid'>
            <TodoCreator callback={this.createNewTodo} />
            <Row>
              <Col xs={12} md={6}>
                <div className="bg-warning p-2 text-white text-center">
                  InComplete Tasks
                </div>
              <Table table="true" bordered hover size="sm">
                <thead>
                  <tr><th>Description</th><th>Done</th></tr>
                </thead>
                <tbody>{ this.todoTableRows(false)}</tbody>
              </Table>
              </Col>
              <Col xs={12} md={6}>
                  <div className="bg-success text-white text-center p-2">
                  <VisibilityControl 
                    description="Completed Tasks"
                    isChecked={this.state.showCompleted}
                    callback={(checked) => this.setState({ showCompleted: checked})} />
                </div>
                {
                    this.state.showCompleted && 
                    <Table bordered hover size="sm">
                      <thead>
                        <tr><th>Description</th><th>Done</th></tr>
                      </thead>
                      <tbody>{this.todoTableRows(true)}</tbody>
                    </Table>
                }            
              </Col>
            </Row>
            
            
          </div>
      </div>
      
    )
  }
}

export default App;
