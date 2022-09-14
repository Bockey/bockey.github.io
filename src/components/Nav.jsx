import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {ReactComponent as ReactLogo} from '../assets/logo.svg';

function Navigation(props) {
    return (
        <>
            <Navbar.Brand href="#home">
                        <ReactLogo></ReactLogo>
                    </Navbar.Brand>
            <Navbar bg="light" expand="md">
                <div className='wrapper'>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav activeKey="/home" >
                            <Nav.Item>
                            <Nav.Link href="/home">Hjem</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="link-1">Om oss</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="link-2">Kontakt</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </>
    );
}

export default Navigation;