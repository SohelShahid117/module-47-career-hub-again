import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';

//47-1 Project Setup With React Router, Tailwind And Daisy UI
//47-2 (Recap) Set Nested Route And Navbar For CareerHub

const router = createBrowserRouter([
  {
    path: '/',
    // element: <div>Hello JavaScript!</div>,
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: '/applied',
        element:<AppliedJobs></AppliedJobs>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
