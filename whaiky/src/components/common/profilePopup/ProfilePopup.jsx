import React from 'react'
import { onLogout } from '../../../api/AuthAPI'
import './ProfilePopup.scss'

export default function ProfilePopup() {
  return (
    <div className='popup-card'>
      <ul className='popup-options'> 
        <li onClick={onLogout} className='popup-option'>Log out</li>
      </ul>
    </div>
  )
}
