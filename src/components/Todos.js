import React, { Component } from 'react'; //class base component
import Todoitems from './Todoitems'; 
import PropTypes from 'prop-types';
class Todos extends Component {
markComplete = ()=>{
  console.log('hello');

}

    render(){
          return this.props.todos.map((todo)=>( //map is used here to loop through & output jsx
            <Todoitems key={todo.id} todo={todo} markComplete= //Todoitems is outputed
            {this.props.markComplete} delTodo={this.props.delTodo} />
          ));
}
}

// We define all our PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodos: PropTypes.func.isRequired
}


export default Todos;
