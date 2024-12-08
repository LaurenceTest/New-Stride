import "../CSS/header.css";
import "../CSS/App.css"


function HeaderNon() {
  return (
    <><header className="navbar">
      <div className="header-left">
        <div className="logo">
          <p>NewStride</p>
        </div>
        <nav className="nav-links">
          <a href="#" className="btn header-btn btn-primary"> How it works</a>
          <a href="#" className="btn header-btn btn-primary">Our Philosphy</a>
        </nav>
        </div>
      <div className="sign-in">
        <button className="btn login-btn">Log in</button>
      </div>
    </header></>
  );
}


export default HeaderNon;
