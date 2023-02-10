import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';

function AppLayout() {
  return (
    <div className="d-flex flex-column h-100">
      <Navbar variant="light" bg="white" expand="lg" className="shadow-sm">
        <Container>
          <Navbar.Brand as={Link} to="/">Chat</Navbar.Brand>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}

export default AppLayout;
