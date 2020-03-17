import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';  //Todos.js brought in to app.js
import AddTodo from './components/AddTodo';
import about from './components/pages/about';
/* import  {v4 as uuidv4} from 'uuid';*/

import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    todos: []
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(res => this.setState({todos:res.data}))
  }

  //Toggle the todo list
  markComplete = (id)=> {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
    
  }

  //Delete Todo
  delTodo = (id)=> {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id!== id)] }));
    
  }

  //Add Todo
  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', { 
      title: title,
      completed: false
    })
    .then(res=> this.setState({ todos: [...this.state.todos, res.data] }) );
    
  }

  render(){ 
return (
  <Router>
  <div className="App">
  <div className="container">
  <Header />
  <Route exact path="/" render={props => (
    <React.Fragment>
    <AddTodo addTodo={this.addTodo} />
    <Todos todos={this.state.todos} markComplete={this.markComplete} 
  delTodo={this.delTodo} />
    </React.Fragment>
  )} />
<Route path='/about' component = {about}  />

  </div>
  </div> 
  </Router>
  
);
}
}

export default App;
