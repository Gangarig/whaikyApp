import React, { useMemo , useState } from 'react';
import Home from '../pages/Home';
import Sidebar from '../components/common/sidebar/Sidebar.jsx';
import { getCurrentUser } from '../api/FirestoreAPI';

export default function HomeLayout() {

  const [currentUser , setCurrentUser] = useState({});

  useMemo(() => {
    getCurrentUser(setCurrentUser);
  }, []);
  return (
      <>
        <Sidebar/>
        <Home currentUser={currentUser}/>
      </>
  )
}
