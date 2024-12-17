import { Link, useNavigate } from "react-router-dom";
import "../CSS/mainPage.css";
import "../CSS/header.css";
import React from "react";
import {useState} from "react";
type RoutePath = 
"/" | 
"/login" | 
"/signup" | 
"/welcome" | 
"/dashboard" | 
"/question1" | 
"/question2" | 
"/question3" | 
"/question4" | 
"/question5" |
"/createuser";

interface Props {
  className?: string;
  to: RoutePath; // Restricts to valid routes; just edit type route path to modify
  label?: string; //default word displayed is "Continue"
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  action?: ()=> Promise<void | boolean>;
}

export const Next = ({ 
  className = "", 
  to, 
  label = "Continue", 
  disabled = false, 
  onClick,
  action
}: Props): JSX.Element => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleClick = async (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      event.preventDefault();
      return;
    }
    if (typeof onClick === "function") {
      onClick(event);
    }
    
    if (action){
      event.preventDefault(); 
      setLoading(true);
      setError(null);

      try {
        await action();
        navigate(to); 
      } catch (err) {
        setError("An error occurred. Please try again."); 
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      <Link to={to} className={`next ${className}`} onClick={handleClick}>
        <div className={`NEXT ${disabled ? "disabled" : ""}`}>
          {loading ? "Loading..." : label}
          </div>
      </Link>
      {error && <p className="error-message">{error}</p>}
    </>
  );
};

