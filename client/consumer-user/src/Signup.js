// Signup.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    // Create an object to represent the user's registration data
    const userData = {
      username: username,
      password: password,
    };

    // Send a POST request to the server's signup endpoint
  try {
    const response = await fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (response.status === 201) {
      // User registration was successful
      console.log('User registered successfully');
      // You can redirect the user to a different page or display a success message here.
      //history.push('/main'); // Redirect to the MainUserPage
    } else {
      // User registration failed
      const data = await response.json();
      console.log('Registration failed:', data.error);
      // You can display an error message to the user in the HTML if needed.
    }
  } catch (error) {
    console.error('An error occurred:', error);
    // Handle any network or server-related errors here.
  }
};
  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
