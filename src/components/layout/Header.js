import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Todo List</h1>
            <Link to='/'> Home </Link> | <Link to='/about'>About</Link>
        </header>
    )
}

const headerStyle ={
    background: '#008FA9',
    color: '#C4E7E6',
    textAlign: 'center',
    padding: '10px'
}
export default Header;