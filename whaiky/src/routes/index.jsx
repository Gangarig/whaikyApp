import Login from '../pages/Login'
import { createBrowserRouter } from 'react-router-dom'
import Register from '../pages/Register'
import HomeComponent from '../components/HomeComponent'
import HomeLayout from '../layouts/HomeLayout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Login/>
  },
  {
    path: '/register',
    element: <Register/>
  },
  {
    path: '/home',
    element: <HomeLayout/>
  }
])
