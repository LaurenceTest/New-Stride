import "../CSS/mainPage.css"
import { Link } from "react-router-dom";

const Header:React.FC<{username:string}> = ({username})=>{
    return (
        <><header className="navbar">
          <div className="header-left">
            <div className="logo">
              <Link to="/dashboard" className="logo-btn">NewStride</Link>
            </div>
            <nav className="nav-links">
                <Link to="/workouts" className="white-btn">Workout Plan</Link>
            </nav>
            </div>
          <div style={{fontWeight:"bolder"}}>
            {/* FIXME: CSS might not be good*/}
            Hi, {username}
            <LogoutButton/>
          </div>
        </header></>
      );
}

const HeaderButton:React.FC<{text:string}> = ({text})=>{
    return(
        <button className="white-btn">{text}</button>
    )
}

const LogoutButton = ()=>{
    return(
        <button className="logout-btn">Log Out</button>
    )
}

export default Header