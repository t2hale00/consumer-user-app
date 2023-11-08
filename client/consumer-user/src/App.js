import React from 'react';
import './App.css'; // You may need to adjust the path based on your project structure
import SignIn from './Signin'; // Import the SignIn component
import SignUp from './Signup'; // Import the SignUp component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ fontSize: '2rem' }}>Paketti</h1>
        <div className="buttons">
          <SignUp />
          <SignIn />
        </div>
      </header>
    </div>
  );
}


export default App;
