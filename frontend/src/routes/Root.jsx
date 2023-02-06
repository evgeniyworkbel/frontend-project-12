import React, { useEffect } from 'react';
import { Navigate, useLoaderData } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import useAuth from '../hooks/index.jsx';
import { actions as channelsActions } from '../slices/channelsSlice.js';
import { actions as messagesActions } from '../slices/messagesSlice.js';
import routes from '../routes.js';

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
    <div>Chat</div>
  );
}

export default Root;
