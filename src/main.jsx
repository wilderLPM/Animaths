import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import App from './App.jsx';
import HomePage from "./pages/HomePage";
import GameMap from "./pages/GameMap";
import DarkForest from "./pages/DarkForest";
import BlueCanyon from "./pages/BlueCanyon";
import './index.css';

const router = createBrowserRouter([
  {
    element: <App />,
    id: "app",
    children: [
      {
        element: <HomePage />,
        id:  "home",
        path:"/"
      },
      {
        element: <GameMap />,
        id:  "map",
        path:"/map/:hero"
      },
      {
        element: <DarkForest />,
        id:  "darkForest",
        path:"/dark-forest/:hero"
      },
      {
        element: <BlueCanyon />,
        id:  "blueCanyon",
        path:"/blue-canyon/:hero"
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)