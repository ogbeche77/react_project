import React, { Component } from 'react';
import PropTypes from 'prop-types';



export class Todoitems extends Component {
    getStyle =() =>{
       return {
           background: 'blue',
           padding: '10px',
           borderBottom: '1px #ccc dotted',
           textDecoration: this.props.todo.completed ?
           'line-through' : 'none'
       
        }
    }

    render() {
        const {id, title } = this.props.todo;
        return (
            <div style={this.getStyle()} >
                <p>
                <input type ='checkbox' onChange={this.props.markComplete.bind
                    (this, id)}  /> {" "}
                    {title}</p>
                    <button onClick= {this.props.delTodo.bind(this, id)} style ={btnStyle}>X</button>
            </div>
        )
    }
}


//Proptypes
Todoitems.propTypes = {
    todo: PropTypes.object.isRequired
  }
  
 const btnStyle = {
     background: 'red',
     color:'yellow',
     border: 'none',
     padding:'0px 5px 0px 5px',
     borderRadius: '30%',
     cursor: 'pointer',
     float: 'right'
 }

export default Todoitems
