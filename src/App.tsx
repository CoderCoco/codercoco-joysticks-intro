import React from 'react';
import BadgeList from './BadgeList';
import LoginEmulator from './login/LoginEmulator'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginEmulator />,
  },
  {
    path: "/cast-and-crew",
    element: <BadgeList />,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App;
