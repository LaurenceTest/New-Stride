import "../CSS/mainPage.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LogIn from "./LogIn";
import Home from "./Home";
function App() {


  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<LogIn/>} />
        </Routes>
        
    </Router>
  );
}


export default App;
