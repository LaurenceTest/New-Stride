import "../CSS/mainPage.css"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { User } from "../Util/interfaceAPI";

const Header:React.FC = ()=>{
  const [user,setUser] = useState<string>()

  useEffect(()=>{
    fetch('/user')
    .then(async res=>{
        const userJson:User = await res.json()
        // console.log(userJson)
        setUser(userJson.username)
    })
},[])
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
            Hi, {user}
            <LogoutButton/>
          </div>
        </header></>
      );
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