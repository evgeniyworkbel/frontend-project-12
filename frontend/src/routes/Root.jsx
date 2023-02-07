import React, { useEffect } from 'react';
import { Navigate, useLoaderData } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

import useAuth from '../hooks/index.jsx';
import { actions as channelsActions } from '../slices/channelsSlice.js';
import { actions as messagesActions } from '../slices/messagesSlice.js';
import routes from '../routes.js';
import Channels from '../components/Channels.jsx';

function getAuthHeader() {
  const user = JSON.parse(localStorage.getItem('userInfo'));
  if (user && user.token) {
    return { Authorization: `Bearer ${user.token}` };
  }

  return {};
}

export async function loader() {
  const { data } = await axios.get(routes.dataPath(), { headers: getAuthHeader() });
  return data;
}

function Root() {
  const { loggedIn } = useAuth();
  const { channels, currentChannelId, messages } = useLoaderData();

  const dispatch = useDispatch();

  // TODO: think of prop state={{ from: location }}
  if (!loggedIn) {
    return <Navigate to="/login" replace />;
  }

  useEffect(() => {
    dispatch(channelsActions.addChannels(channels));
    dispatch(channelsActions.setCurrentChannel({ id: currentChannelId }));
    dispatch(messagesActions.addMessages(messages));
  });

  return (
    <Container className="h-100 my-4 overflow-hidden rounded-2 shadow">
      <Row className="h-100 d-flex flex-md-row bg-white">
        <Col xs={4} md={2} className="border-end pt-5 px-0 bg-light">
          <Channels />
        </Col>
        <Col xs className="h-100 p-0">Col2</Col>
      </Row>
    </Container>
  );
}

export default Root;
