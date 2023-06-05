import React from "react";
import './ProfileCard.scss'

export default function ProfileCard({currentUser, onEdit}) {


  return  (
    <>
      <div className='profileCard'>
      <div>
        <button className='editBtn' onClick={onEdit} >EDIT</button>
      </div>
      <p className='userName'>{currentUser.FirstName} {currentUser.LastName}</p>
      <p className='userEmail'>{currentUser.Address}</p>
      <p className='userEmail'>{currentUser.Country}</p>
      <p className='userEmail'>{currentUser.Region}</p>
      <p className='userEmail'>{currentUser.email}</p>
      <p className='userEmail'>{currentUser.PhoneNumber}</p>
      </div>
    </>
  );
}
