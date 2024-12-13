import "../CSS/mainPage.css";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import YogaWoman from "../assets/bgs/feminist-woman-showing-her-power.png";
import { Next } from "../Components/Next";

// Interface for login response
interface LoginResponse {
  token: string;
}

const LogIn: React.FC = () => {
  const [email, setEmail] = useState<string>(''); // State for email input
  const [password, setPassword] = useState<string>(''); // State for password input
  const [message, setMessage] = useState<string>(''); // State for success/error messages
  const navigate = useNavigate(); // Initialize navigate hook

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload
    setMessage(''); // Clear any previous messages

    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error(`Login failed: ${response.statusText}`);
      }

      const data: LoginResponse = await response.json(); // Parse JSON response
      setMessage('Login successful!');
      localStorage.setItem('token', data.token); // Optionally save token in localStorage
      navigate('/dashboard'); // Redirect to dashboard
    } catch (error) {
      setMessage((error as Error).message); // Display error message
    }
  };

  return (
    <div>
      <div className="text-content">
        <div className="tc-image">
          <img src={YogaWoman} className="featured-image" alt="Yoga Woman"/>
        </div>

        <div className="tc-text">
          <form onSubmit={handleSubmit} className="login-form">
            <h1>Login</h1>
            <div className="inputs">
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Email Address" 
                className="input-form" 
                required 
              />
            </div>
            <div className="inputs">
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Password" 
                className="input-form" 
                required 
              />
              <div className="forgot-pass">
                <a href="#" className="">Forgot Password?</a>
              </div>
            </div>

            <div className="inputs">
              <button type="submit" className="btn-login">Login</button>
              or
              <Next className="btn-signup" to="/welcome" label="Sign Up"/>
            </div>
          </form>
        </div>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
};

export default LogIn;
