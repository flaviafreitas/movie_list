import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/home/Home.jsx';
import MovieDetail from './pages/movieDetail/MovieDetail.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.scss'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "/movie/:id",
        element: <MovieDetail />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
