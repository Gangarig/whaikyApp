import React from 'react'
import Home from '../pages/Home'
import Sidebar from '../components/common/sidebar/Sidebar.jsx'

export default function HomeLayout() {
  return (
    <div className='homeLayout'>
        <Sidebar/>
        <Home/>
    </div>
  )
}
