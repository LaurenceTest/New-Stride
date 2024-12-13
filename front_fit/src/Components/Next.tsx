import { Link } from "react-router-dom";
import "../CSS/mainPage.css";
import "../CSS/header.css";
type RoutePath = "/" | "/login" | "/signup" | "/welcome" | "/createuser";

interface Props {
  className?: string;
  to: RoutePath; // Restricts to valid routes; just edit type route path to modify
  label?: string; //default word displayed is "Continue"
}

export const Next = ({ className = "", to, label = "Continue" }: Props): JSX.Element => {
  return (
    <Link to={to} className={`next ${className}`}>
      <div className="NEXT">{label}</div>
    </Link>
  );
};

