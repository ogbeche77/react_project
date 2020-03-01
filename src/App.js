import React, { Component } from 'react';
import Todos from './components/Todos';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Make a doctor's appointment",
        completed: false
      },
      {
        id: 2,
        title: "Cook dinner",
        completed: false
      },
      {
        id: 3,
        title: "Learn more algorithms",
        completed: false
      }
    ]
  }
  render(){
   
return (
  <div className="App">
    <Todos todos={this.state.todos}/>
  </div>
);
}
}

export default App;
