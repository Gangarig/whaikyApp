import React from 'react'
import { AiFillHome, AiFillProfile, AiOutlineMessage } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { BsWallet } from 'react-icons/bs';
import { BsPersonCircle } from 'react-icons/bs';
import user from '../../../../src/assets/images/user.png'
export default function Sidebar() {
  return (
    <div className='sideBar'>
      <img src={user} alt="user"/>
      <AiFillHome size={40} className='reactIcon'/>
      <AiFillProfile size={40} className='reactIcon'/>
      <AiOutlineMessage size={40} className='reactIcon'/>
      <BsWallet size={40} className='reactIcon'/>
      <BsPersonCircle size={40} className='reactIcon'/>
      <FiSettings size={40} className='reactIcon'/>
      <h2>SideBar</h2>
    </div>
  )
}
