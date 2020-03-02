import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import about from './components/pages/about';
import  {v4 as uuidv4} from 'uuid';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: "Make a doctor's appointment",
        completed: true
      },
      {
        id: uuidv4(),
        title: "Cook dinner",
        completed: false
      },
      {
        id: uuidv4(),
        title: "Learn more algorithms",
        completed: false
      }
    ]
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
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id!== id)] });
  }

  //Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
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
