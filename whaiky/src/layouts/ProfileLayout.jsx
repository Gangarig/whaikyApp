import React, { useMemo , useState } from 'react'
import { getCurrentUser } from '../api/FirestoreAPI'
import Sidebar from '../components/common/Sidebar/Sidebar.jsx'
import Profile from '../pages/Profile.jsx'


export default function ProfileLayout() {   
    const [currentUser, setCurrentUser] = useState({});
    useMemo(() => {
        getCurrentUser(setCurrentUser);
    }, []);
  return (
    <div>
        <Sidebar currentUser={currentUser}/>
        <Profile currentUser={currentUser}/>
    </div>
  )
}
