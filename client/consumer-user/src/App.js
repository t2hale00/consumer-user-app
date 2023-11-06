import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Use BrowserRouter as Router
import './App.css';
import SignIn from './Signin'; // Import the SignIn component
import SignUp from './Signup'; // Import the SignUp component

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 style={{ fontSize: '2rem' }}>Paketti</h1>
          <div className="buttons">
            <Link to="/signup">
              <button>Sign Up</button>
            </Link>
            <Link to="/signin">
              <button>Sign In</button>
            </Link>
          </div>
        </header>

        <Routes>
          <Route path="/signup" element={<SignUp />} /> {/* Use 'element' instead of 'component' */}
          <Route path="/signin" element={<SignIn />} /> {/* Use 'element' instead of 'component' */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
