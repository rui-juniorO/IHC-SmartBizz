import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import LogIn_form from './pages/LogIn/LogIn';
import Page from './pages/LogIn/page';

const router = createBrowserRouter([
  {path : "/", element: <LogIn_form></LogIn_form>},
  {path : "page", element : <Page></Page>}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

