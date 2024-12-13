import "../CSS/mainPage.css";
import React, { useState } from 'react';
import YogaWoman from "../assets/bgs/woman-stretching-yoga-mat-home.png"
import HeaderNon from "../Components/header_notuser";

// Interface for login response
interface LoginResponse {
  token: string;
}

const LogIn: React.FC = () => {
  const [email, setEmail] = useState<string>(''); // State for email input
  const [password, setPassword] = useState<string>(''); // State for password input
  const [message, setMessage] = useState<string>(''); // State for success/error messages

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload
    setMessage(''); // Clear any previous messages

    try {
      const response = await fetch('https://example.com/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error(`Login failed: ${response.statusText}`);
      }

      const data: LoginResponse = await response.json(); // Parse JSON response
      setMessage(`Login successful! Token: ${data.token}`);
    } catch (error) {
      setMessage((error as Error).message); // Display error message
    }
  };

  return (
    <div>
    <HeaderNon />
    <div className="text-content">
      <div className="tc-image">
        <img src={YogaWoman} className="featured-image"/>
      </div>

      <div className="tc-text">
        <h1>NewStride</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
      {message && <p>{message}</p>}
      <p>test</p>
    </div>
  );
};

export default LogIn;
