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
  const [loading, setLoading] = useState<boolean>(false); 
  const navigate = useNavigate(); // Initialize navigate hook

  const performLogin = async (): Promise<boolean> => {
    setMessage(''); // Clear previous messages
    setLoading(true);
    try {
      const response = await fetch('/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
        credentials: 'include'
      });

      if (!response.ok) {
        throw new Error(`Login failed: ${response.statusText}`);
      }

      const data: LoginResponse = await response.json();
      setMessage('Login successful!');
      localStorage.setItem('token', data.token); // Save token
      console.log("Login good!");
      return true; 
    } catch (error) {
      setMessage((error as Error).message);
      return false; 
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload
    const success = await performLogin();
    if (success) {
      navigate('/dashboard'); // Navigate to dashboard on success
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
              {/* <div className="forgot-pass">
                <a href="#" className="">Forgot Password?</a>
              </div> */}
            </div>
            
            <div className="inputs">
              <Next
                className="btn-login"
                to="/dashboard" 
                label="Log In"
                action={performLogin}
              />
              or
              <Next 
                className="btn-signup"
                to="/welcome"
                label="Create a new account"
              ></Next>
            </div>
          </form>
        </div>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
};

export default LogIn;
