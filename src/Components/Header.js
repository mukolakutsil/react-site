import React, { Component } from 'react';
import { FormControl, Navbar, Nav, Container, Form, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from './logo192.png';


export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height="30"
                                width="30"
                                className="d-inline-block align-top"
                                alt="logo"
                            />
                        React site
                    </Navbar.Brand>
                        <Navbar.Toggle arial-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link>
                                    <NavLink className="link" to="/">Home</NavLink>
                                </Nav.Link>
                                <Nav.Link>
                                    <NavLink className="link" to="/about">About us</NavLink>
                                </Nav.Link>
                                <Nav.Link>
                                    <NavLink className="link" to="/contacts">Contacts</NavLink>
                                </Nav.Link>
                                <Nav.Link>
                                    <NavLink className="link" to="/blog">Blog</NavLink>
                                </Nav.Link>

                            </Nav>
                            <Form inline>
                                <FormControl
                                    type="text"
                                    placeholder="Search"
                                    className="mr-sm-2"
                                />
                                <Button variant="outline-info">Search</Button>
                            </Form>
                        </Navbar.Collapse>

                    </Container>
                </Navbar>


            </>
        )
    }
}

;