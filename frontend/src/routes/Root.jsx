import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
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

// FIX: navigate to login form twice
function Root() {
  const { loggedIn } = useAuth();
  const dispatch = useDispatch();

  // TODO: think of prop state={{ from: location }}
  if (!loggedIn) {
    return <Navigate to="/login" replace />;
  }

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(routes.dataPath(), { headers: getAuthHeader() });
      const { channels, currentChannelId, messages } = data;

      dispatch(channelsActions.addChannels(channels));
      dispatch(channelsActions.setCurrentChannel({ id: currentChannelId }));
      dispatch(messagesActions.addMessages(messages));
    };

    fetchData();
  });

  return (
    <div>Chat</div>
  );
}

export default Root;
