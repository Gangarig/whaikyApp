import React from 'react'
import './ProfileEdit.scss'


export default function ProfileEdit({onEdit}) {
  const getInput = (event) => {
    
  }

  return (
    <div className='profileCard'>
      <div>
        <button className='editBtn' onClick={onEdit} >Go Back</button>
      </div>
      <div className='profileEditInputs'>
        <input className='editInput' placeholder='First Name' />
        <input className='editInput' placeholder='Last Name' name="Name"/>
        <input className='editInput' placeholder='Address' name="Name"/>
        <input className='editInput' placeholder='Country' name="Name"/>
        <input className='editInput' placeholder='Region' name="Name"/>
        <input className='editInput' placeholder='PhoneNumber' name="Name"/>
      </div>
    </div>
  )
}
