import { Link } from "react-router-dom";
import "../CSS/mainPage.css";
import "../CSS/header.css";
type RoutePath = "/" | "/login" | "/signup" | "/welcome" | "/dashboard"
| "/question1" | "/question2" | "/question3" | "/question4" | "/question5"
| "/createuser";

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

