import React, { useEffect } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';

import useAuth from '../hooks/index.jsx';

function Root() {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.loggedIn) {
      navigate('/login');
    }
  }, [auth.loggedIn]);

  return (
    <div className="d-flex flex-column h-100">
      <Navbar variant="light" bg="white" expand="lg" className="shadow-sm">
        <Container>
          <Navbar.Brand as={Link} to="/">Chat</Navbar.Brand>
        </Container>
      </Navbar>
      <div id="main" className="h-100">
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
