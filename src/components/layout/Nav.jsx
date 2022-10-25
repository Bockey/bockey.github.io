import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { ReactComponent as ReactLogo } from "../../assets/logo.svg";

function Navigation(props) {
  const activeLink = window.location.pathname;
  return (
    <>
      <Navbar.Brand href="/hjem" exact="exact">
        <ReactLogo></ReactLogo>
      </Navbar.Brand>
      <Navbar bg="light" expand="md">
        <div className="wrapper">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav activeKey={activeLink}>
              <Nav.Item>
                <Nav.Link href="/hjem">Hjem</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/tjenester">Tjenester</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/om-oss">Om oss</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/kontakt">Kontakt</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
}

export default Navigation;
