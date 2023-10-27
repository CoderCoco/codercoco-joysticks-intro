import React from 'react';
import AppSidebarView from './app-sidebar-view/AppSidebarView'
import LoginEmulator from './login/LoginEmulator'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import BadgeList from './cast-and-crew/BadgeList';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginEmulator />,
  },
  {
    path: "/cast-and-crew",
    element: <AppSidebarView />,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App;
