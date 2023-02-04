import React from 'react';
import { Navigate, useLoaderData } from 'react-router-dom';
import axios from 'axios';

import useAuth from '../hooks/index.jsx';
import routes from '../routes.js';

function getAuthHeader() {
  const user = JSON.parse(localStorage.getItem('userInfo'));
  if (user && user.token) {
    return { Authorization: `Bearer ${user.token}` };
  }

  return {};
}

export async function loader() {
  const res = await axios.get(routes.dataPath(), { headers: getAuthHeader() });
  return res;
}

function Root() {
  const { loggedIn } = useAuth();
  const loadedData = useLoaderData();
  console.log(loadedData);

  // TODO: think of prop state={{ from: location }}
  if (!loggedIn) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div>Chat</div>
  );
}

export default Root;
