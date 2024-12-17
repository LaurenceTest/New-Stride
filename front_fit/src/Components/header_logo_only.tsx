import "../CSS/header.css";
import "../CSS/App.css"
import { Link } from "react-router-dom";

function HeaderSimple() {
  return (
    <><header className="navbar">
      <div className="header-left">
        <div className="logo">
          <Link to="/" className="logo-btn">NewStride</Link>
        </div>
        
        </div>
      <div className="sign-in">
       
      </div>
    </header></>
  );
}


export default HeaderSimple;