import React from 'react'
import { LoginAPI } from '../api/AuthAPI'

export default function LoginComponent () {
  const login = () => {
    let res = LoginAPI();
    console.log(res);
  };
  
  return (
    <div>
      <h1>LoginComponent</h1>
      
      <button className='login-btn' onClick={login}>Login</button>
    </div>
  )
}
