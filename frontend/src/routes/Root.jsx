import React, { useEffect } from 'react';
import { Outlet, useNavigate, useLoaderData } from 'react-router-dom';
import axios from 'axios';

import AppBar from '../components/AppBar.jsx';
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

  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedIn) {
      navigate('/login');
    }
  }, [loggedIn]);

  return (
    <div className="d-flex flex-column h-100">
      <AppBar />
      <div id="main" className="h-100">
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
