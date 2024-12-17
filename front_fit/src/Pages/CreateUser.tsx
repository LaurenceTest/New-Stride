import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputField } from "../Components/input_field";
import { Next } from "../Components/Next";
import "../CSS/SignIn.css";


const CreateUser = (): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState<boolean>(false);

  
  
  const logSessionStorage = () => {
    console.log("Session Storage Data:");
    console.log({
      birth_date: sessionStorage.getItem("birth_date"),
      sex: sessionStorage.getItem("gender"),
      height: sessionStorage.getItem("height"),
      weight: sessionStorage.getItem("weight"),
      weight_goal: sessionStorage.getItem("weight_goal"),
      baselineActivity: sessionStorage.getItem("baseline_activity"),
      goal: sessionStorage.getItem("main_goal"),
    });
  };
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return emailRegex.test(email);
  };
  const validateForm = (): boolean => {
    if (email.trim() === "" || password.trim() === "") {
      setError("Please provide both email and password.");
      return false;
    }
    if (!validateEmail(email)) {
      setError("Please provide a valid email address.");
      return false;
    }
    if (password.length < 8 || password.length > 50) {
      setError("Password must be between 8 and 50 characters.");
      return false;
    }
    return true;
  };
  
  const navigate = useNavigate();
  const handleSubmit = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); 
    setHasAttemptedSubmit(true);

   
    if (!validateForm()) {
      setError("Please provide a valid email and password.");
      return;
    }
    setError(""); 

    

    const payload = {
      email,
      password,
      username: sessionStorage.getItem("username"),
      birth_date: sessionStorage.getItem("birth_date"),
      gender: sessionStorage.getItem("gender"),
      height: sessionStorage.getItem("height"),
      weight: sessionStorage.getItem("weight"),
      weight_goal: sessionStorage.getItem("weight_goal"),
      baseline_activity: sessionStorage.getItem("baseline_activity"),
      main_goal: sessionStorage.getItem("main_goal"),
    };
    console.log("Payload being sent to backend:", payload);

    try {
      const response = await fetch("/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
  
      if (response.ok) {
        console.log("User created successfully!");
        navigate("/");
      } else {
        const text = await response.text(); 
        const errorData = text ? JSON.parse(text) : { message: "Unknown error" }; // Parse only if text exists
        setError(`Failed to create user: ${errorData.message}`);
      }
    } catch (err) {
      console.error("Error sending data:", err);
      setError("An unexpected error occurred.");
    }
  };


  return (<>
    <main className="">
      <section className="content-wrapper">

        <header className="header">
          <h1 className="header-title">NewStride</h1>
        </header>

        <div className="form-container">
          <h2 className="form-title">Almost there! Create your account</h2>
          <form className="form">
          <InputField
              label="Email"
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputField
              label="Password"
              placeholder="Enter your password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
             {hasAttemptedSubmit && error && <div className="error">{error}</div>}
            <p className="form-hint">
              Must be at least 10 characters, no spaces.
            </p>
            
            <div className="button-group">
              <Next label="Back" to="/question5" className="btn-purple" />
              <a
                href="#"
                className="btn-purple"
                onClick={handleSubmit}
              >Submit </a>
            </div>
          </form>
        </div>
      </section>
    </main>
    </>);
};

export default CreateUser;