import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';

function AppBar() {
  return (
    <Navbar variant="light" bg="white" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/">Chat</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default AppBar;
