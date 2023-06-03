import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider
} from 'react-router-dom'
import './index.scss'
import { router } from './routes/index'
import { app } from './firebaseconfig'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>
)
