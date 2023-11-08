/*// SignIn.js
import React, { useState } from 'react';

function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    // Create an object to represent the user's credentials
    const credentials = {
      username: username,
      password: password,
    };

    // Make a POST request to your authentication endpoint
    try {
      const response = await fetch('YOUR_AUTHENTICATION_API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        // Authentication was successful, you can redirect or set user state here
        console.log('User signed in successfully');
      } else {
        // Authentication failed, handle errors here
        console.error('Sign-in failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
*/
import React from 'react'

function Login() {
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <form action=''>
          <div className='mb-3'>
            <label htmlFor="email"><strong>Email</strong></label>
            <input type="email" placeholder=' Enter email' />
          </div>
          <div className='mb-3'>
            <label htmlFor="password"><strong>Password</strong></label>
            <input type="password" placeholder=' Enter password' />
          </div>
          <button className='btn btn-success'>Log in</button>
          <p></p>
          <button className='btn btn-default border'>Create Account</button>
        </form>
      </div>
    </div>
  )
}

export default Login;