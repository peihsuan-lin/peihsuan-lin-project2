import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Home from './pages/Home';
import Game from './pages/Game';
import Rules from './pages/Rules';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/game/:difficulty",
    element: <Game />,
  },
  {
    path: "/rules",
    element: <Rules />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
