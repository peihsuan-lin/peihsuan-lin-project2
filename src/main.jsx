import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import App from './App';
import Layout from './layouts/dashboard';
import DashboardPage from './pages';
import Game from './pages/game';
import Rules from './pages/rules';

const router = createBrowserRouter([
  {
    Component: App, 
    children: [
      {
        path: '/',
        Component: Layout,
        children: [
          {
            path: '',
            Component: DashboardPage,
          },
          {
            path: 'game',
            element: <Navigate to="/game/easy" replace />,
          },
          {
            path: 'game/:difficulty',
            Component: Game,
          },
          {
            path: 'rules',
            Component: Rules,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
