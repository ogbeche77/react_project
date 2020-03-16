import React, { Component } from 'react'; //class base component
import Todoitems from './Todoitems'; 
import PropTypes from 'prop-types';
class Todos extends Component {
markComplete = ()=>{
  console.log('hello');

}

    render(){
          return this.props.todos.map((todo)=>(
            <Todoitems key={todo.id} todo={todo} markComplete=
            {this.props.markComplete} delTodo={this.props.delTodo} />
          ));
}
}


// PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodos: PropTypes.func.isRequired
}


export default Todos;
