import React, { Component } from 'react';
import PropTypes from 'prop-types'; // prototype brough in & defined below



export class Todoitems extends Component {
    getStyle =() =>{ // Line through if the task is completed & other styling as well. Style method is defined below
       return {
           background: '#D9A035',
           padding: '10px',
           borderBottom: '1px #ccc dotted',
           textDecoration: this.props.todo.completed ?
           'line-through' : 'none'
       
        }
    }

    render() {
        const {id, title } = this.props.todo; //destructing
        return (
            <div style={this.getStyle()} > 
                <p>
                <input type ='checkbox' onChange={this.props.markComplete.bind  //when box is checked, onchange is fired
                    (this, id)}  /> {" "}
                    {title}</p>
                    <button onClick= {this.props.delTodo.bind(this, id)} style ={btnStyle}>X</button>
            </div>
        )
    }
}


//We define our Proptypes here
Todoitems.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodos: PropTypes.func.isRequired
  }


 const btnStyle = {
     background: '#031D44',
     color:'#FFB642',
     border: 'none',
     padding:'0px 5px 0px 5px',
     borderRadius: '30%',
     cursor: 'pointer',
     float: 'right'
 }

export default Todoitems
