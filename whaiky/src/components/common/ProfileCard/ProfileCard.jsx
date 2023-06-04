import React from "react";
import './ProfileCard.scss'

export default function ProfileCard({currentUser, onEdit}) {


  return  (
    <>
      <div className='profileCard'>
      <div>
        <button className='editBtn' onClick={onEdit} >EDIT</button>
      </div>
      <h3 className='userName'>{currentUser.name}</h3>
      <p className='userEmail'>{currentUser.email}</p>
      </div>
    </>
  );
}
