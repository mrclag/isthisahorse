import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" className="mb-3">
      {/* <Navbar.Brand href="#home">IsThisAHorse.com</Navbar.Brand> */}
      <Nav className="mx-auto">
        <Nav.Link href="/" style={{ color: '#ddd', marginRight: '10px' }}>
          Classify
        </Nav.Link>
        <Nav.Link href="/list" style={{ color: '#ddd', marginLeft: '10px' }}>
          Image History
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
