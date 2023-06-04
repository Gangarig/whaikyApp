import React, { useState } from 'react';
import { LoginAPI, GoogleSigninAPI } from '../api/AuthAPI';
import '../sass/LoginComponent.scss';
import GoogleButton from 'react-google-button'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


export default function LoginComponent() {
  const [credentials, setCredentials] = useState({});

  // router navigate
  let navigate = useNavigate();

  // login method
  const login = async () => {
    try {
      let res = await LoginAPI(credentials.email, credentials.password);
      toast.success('Login Success');
      localStorage.setItem('userEmail', res.user.email);
      navigate('/home');
    } catch (err) {
      toast.error('Please Check your Credentials');
    }
  };
  // google sign in
  const googleSignin = async () => {
    let res = GoogleSigninAPI();
    localStorage.setItem('userEmail', res.user.email);
    toast.success('Signed in with Google Account');
    navigate('/home');
  };

  return (
    <div className='login-wrapper'>
      <h1>Login Component</h1>
      <div className='auth-input'>
        <input
          onChange={(event) => setCredentials({ ...credentials, email: event.target.value })}
          placeholder='Enter Your Email'
          className='common-input'
          type='email'

        />
        <input
          onChange={(event) => setCredentials({ ...credentials, password: event.target.value })}
          placeholder='Enter Your Password'
          className='common-input'
          type='password'

        />
      </div>
      <button onClick={login} className='login-btn'>
        Log in
      </button>
      <button onClick={() => navigate('/register')} className='login-btn google-btn'>
        Register
      </button>
      <GoogleButton
      className='google-btn'
      onClick={googleSignin}
      />
    </div>
  );
}
