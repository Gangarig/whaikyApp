import React , { useState } from 'react'
import { editProfile } from '../../../api/FirestoreAPI';
import './ProfileEdit.scss'


export default function ProfileEdit({onEdit , currentUser}) {

  const [editInputs, setEditInouts] = useState({})
  const getInput = (event) => {
    let {name, value} = event.target;
    let input = {[name]: value};
    setEditInouts({...editInputs, ...input});

  };
  const updateProfileData = async () => {
     await editProfile(currentUser?.userID , editInputs);
     await onEdit();
    };

  return (
    <div className='profileEdit'>
      <div>
        <button className='editBtn' onClick={onEdit} >Go Back</button>
      </div>
      <div className='profileEditInputs'>
        <input onChange={getInput} 
        className='editInput'
         placeholder='First Name' 
         name="FirstName"/>
        <input onChange={getInput} 
        className='editInput'
         placeholder='Last Name' 
         name="LastName"/>
        <input onChange={getInput} 
        className='editInput'
         placeholder='Address' 
         name="Address"/>
        <input onChange={getInput} 
        className='editInput'
         placeholder='Country' 
         name="Country"/>
        <input onChange={getInput} 
        className='editInput'
         placeholder='Region' 
         name="Region"/>
        <input onChange={getInput} 
        className='editInput'
         placeholder='PhoneNumber' 
         name="PhoneNumber"/>
        <button onClick={updateProfileData} >Save</button>
      </div>
    </div>
  )
}
