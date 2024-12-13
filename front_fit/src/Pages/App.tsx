import "../CSS/mainPage.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import Home from "./Home";
import CreateUser from "./CreateUsername";
import Welcome from "./Welcome";
import Dashboard from "./Dashboard";
import Demographic from "./Demographic1";
import Demographic2 from "./Demographic2";
import CreateGoal from "./CreateGoal";
import CreateBaselineActivity from "./CreateBaselineAct";
import InputName from "./CreateName";
function App() {


  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<LogIn/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/createuser" element={<CreateUser/>}/>
          <Route path="/welcome" element={<Welcome/>}/>
          <Route path="/question1" element={<InputName/>}/>
          <Route path="/question2" element={<Demographic/>}/>
          <Route path="/question3" element={<Demographic2/>}/>
          <Route path="/question4" element={<CreateGoal/>}/>
          <Route path="/question5" element={<CreateBaselineActivity/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
        
    </Router>
  );
}


export default App;
