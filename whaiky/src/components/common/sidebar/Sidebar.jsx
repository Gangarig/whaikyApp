import React, { useEffect , useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiFillHome, AiFillProfile, AiOutlineMessage } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { BsWallet } from 'react-icons/bs';
import { BsPersonCircle } from 'react-icons/bs';
import ProfilePopup from '../ProfilePopup/ProfilePopup';
import './Sidebar.scss';

export default function Sidebar() {
  const [popupVisible, setPopupVisible] = useState(false);
  const displayPopup = () => {
    setPopupVisible(!popupVisible);
  };

  const navigate = useNavigate();

  const navigateToProfile = () => {
    navigate('/profile');
  };

  return (
    <div className='sideBar'>
      <div>
        <AiFillHome size={40} className='reactIcon' />
        <AiFillProfile
          size={40}
          className='reactIcon'
          onClick={navigateToProfile}
        />
        <AiOutlineMessage size={40} className='reactIcon' />
        <BsWallet size={40} className='reactIcon' />
        <FiSettings size={40} className='reactIcon' />
      </div>
      <div>
        <BsPersonCircle
          size={40}
          className='reactIcon'
          onClick={displayPopup}
        />
        {popupVisible ? (
          <div className='popup-position'>
            <ProfilePopup />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
