const Header:React.FC<{username:string}> = ({username})=>{
    return (
        <><header className="navbar">
          <div className="header-left">
            <div className="logo">
              <p>NewStride</p>
            </div>
            <nav className="nav-links">
                <HeaderButton text="Home"/>
                <HeaderButton text="Workout Plan"/>
                <HeaderButton text="My Records"/>
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
        <button className="header-btn">{text}</button>
    )
}

const LogoutButton = ()=>{
    return(
        <button className="logout-btn">Log Out</button>
    )
}

export default Header