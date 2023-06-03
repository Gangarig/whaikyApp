/* eslint-disable react/react-in-jsx-scope */
import Login from '../pages/Login'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login/>
  }
])
