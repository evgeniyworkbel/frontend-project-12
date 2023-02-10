import React, { useState, useMemo } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import AuthContext from './contexts/index.jsx';
import AppLayout from './components/AppLayout.jsx';
import Root, { loader as rootLoader } from './routes/Root.jsx';
import ErrorPage from './routes/ErrorPage.jsx';
import LoginForm from './routes/LoginForm.jsx';

function AuthProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);

  const logIn = () => setLoggedIn(true);
  const logOut = () => {
    localStorage.removeItem('userInfo');
    setLoggedIn(false);
  };

  // Look about rule at https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md
  const authServices = useMemo(() => ({ loggedIn, logIn, logOut }), [loggedIn]);

  return (
    <AuthContext.Provider value={authServices}>
      {children}
    </AuthContext.Provider>
  );
}

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Root />,
        loader: rootLoader,
      },
      {
        path: '/login',
        element: <LoginForm />,
      },
    ],
  },

]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
