import "../CSS/header.css";
import "../CSS/App.css"
import { Next } from "../Components/Next"

function HeaderNon() {
  return (
    <><header className="navbar">
      <div className="header-left">
        <div className="logo">
          <p>NewStride</p>
        </div>
        <nav className="nav-links">
          <a href="#" className="btn white-btn btn-primary"> How it works</a>
          <a href="#" className="btn white-btn btn-primary">Our Philosphy</a>
        </nav>
        </div>
      <div className="sign-in">
        <Next className="logout-btn" to="/login" label="Log in"/>
      </div>
    </header></>
  );
}


export default HeaderNon;
