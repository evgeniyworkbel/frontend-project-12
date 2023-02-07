import React from 'react';
import { Nav, Button } from 'react-bootstrap';

function Channel({ item, currentId }) {
  return (
    <Nav.Item as="li">
      <Nav.Link as={Button} variant={currentId === item.id ? 'secondary' : ''} className="text-start rounded-0">
        <span>#</span>
        {item.name}
      </Nav.Link>
    </Nav.Item>
  );
}

export default Channel;
