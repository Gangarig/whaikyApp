import React, { useState } from 'react';
import { RegisterAPI, GoogleSigninAPI } from '../api/AuthAPI';
import '../sass/LoginComponent.scss';
import GoogleButton from 'react-google-button';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function LoginComponent() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const register = async () => {
    try {
      if (credentials.email === '' || credentials.password === '') {
        toast.error('Please enter email and password');
        return;
      }

      let res = await RegisterAPI(credentials.email, credentials.password);
      toast.success('Account Created Successfully');
      navigate('/home');
    } catch (err) {
      toast.error('Cannot Create Account. Try Again');
    }
  };

  const googleSignin = async () => {
    let res = GoogleSigninAPI();
    toast.success('Signed in with Google Account');
    navigate('/home');
  };

  return (
    <div className='login-wrapper'>
      <h1>Login Component</h1>
      <div className='auth-input'>
        <input
          onChange={(event) => setCredentials({ ...credentials, email: event.target.value })}
          value={credentials.email}
          placeholder='Enter Your Email'
          className='common-input'
          type='email'
        />
        <input
          onChange={(event) => setCredentials({ ...credentials, password: event.target.value })}
          value={credentials.password}
          placeholder='Enter Your Password'
          className='common-input'
          type='password'
        />
      </div>
      <button onClick={register} className='login-btn' disabled={!credentials.email || !credentials.password}>
        Create Account
      </button>
      <GoogleButton className='google-btn' onClick={googleSignin} />
    </div>
  );
}
