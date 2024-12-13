import { Link } from "react-router-dom";
import "../CSS/mainPage.css";
import "../CSS/header.css";
import React from "react";
type RoutePath = "/" | "/login" | "/signup" | "/welcome" | "/dashboard"
| "/question1" | "/question2" | "/question3" | "/question4" | "/question5"
| "/createuser";

interface Props {
  className?: string;
  to: RoutePath; // Restricts to valid routes; just edit type route path to modify
  label?: string; //default word displayed is "Continue"
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const Next = ({ className = "", to, label = "Continue", disabled = false, onClick }: Props): JSX.Element => {
  
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      event.preventDefault(); // Prevent navigation if disabled
    }
    onClick && onClick(event);
  };
  return (
    <Link to={to} className={`next ${className}`} onClick={handleClick}>
      <div className={`NEXT ${disabled ? "disabled" : ""}`}>{label}</div>
    </Link>
  );
};

