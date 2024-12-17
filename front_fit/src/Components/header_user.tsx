import "../CSS/mainPage.css"
import { Link, useNavigate } from "react-router-dom";

const Header:React.FC = ()=>{
    return (
        <><header className="navbar">
          <div className="header-left">
            <div className="logo">
              <Link to="/dashboard" className="logo-btn">NewStride</Link>
            </div>
            <nav className="nav-links">
                <Link to="/workouts" className="white-btn">Workout Plan</Link>
                <Link to="/records" className="white-btn">Records</Link>
            </nav>
            </div>
          <div style={{fontWeight:"bolder"}}>
            Hi, {sessionStorage.getItem("username")}
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
    const navigate = useNavigate() 
    const logoutCall = ()=>{
      fetch('http://localhost:5173/auth/logout')
      .then(res=>{
        if(res.ok) navigate('/')
      })
    }
    return(
        <button onClick={()=>logoutCall()} className="logout-btn">Log Out</button>
    )
}

export default Header