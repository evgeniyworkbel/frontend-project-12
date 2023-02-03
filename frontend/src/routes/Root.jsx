import React from 'react';
import { Outlet, Link /* , redirect, Navigate */ } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';

import useAuth from '../hooks/index.jsx';

/* export function loader() {
  const user = localStorage.getItem('userInfo');
  if (!user) {
    throw redirect('/login');
  }

  return null;
} */

function Root() {
  const auth = useAuth();
  console.log(auth);

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
