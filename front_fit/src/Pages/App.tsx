import "../CSS/mainPage.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import Home from "./Home";
import CreateUser from "./CreateUsername";
import Welcome from "./Welcome";
function App() {


  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<LogIn/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/createuser" element={<CreateUser/>}/>
          <Route path="/welcome" element={<Welcome/>}/>
        </Routes>
        
    </Router>
  );
}


export default App;
