import React,{ useEffect,useState } from 'react'
import LoginComponent from '../components/LoginComponent'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebaseconfig'
import { useNavigate } from 'react-router-dom';
import Loader from '../components/common/loader/loader';


export default function Login () {
  const [loading, setLoading] = useState(true); // [1
  let Navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (res?.accessToken) {
        Navigate('/home');
      } else {
       setLoading(false);
      }
    });
  }, []);
  return loading ? <Loader /> : <LoginComponent />;
}