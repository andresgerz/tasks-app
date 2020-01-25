import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';


export default class Navigation extends Component {
  
  
  render() {
    return (

        <div>
          <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Tasks App</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <Link className="text-white mr-4" to="/">Tasks</Link>
                <Link className="text-white mr-4" to="/create">Create task</Link>
                <Link className="text-white" to="/user">Create user</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div> 
    )
  }
}
