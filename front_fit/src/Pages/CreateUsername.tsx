
import { useState } from "react";
import { Eye } from "../components/Eye";
import { FirstName } from "../components/FirstName";
import { Next } from "../components/Next";
import image from "../assets/elements/squiggly_purple_lines.svg";
import rectangle8 from "../assets/elements/rectangle-8.svg";
import "../CSS/SignIn.css";

const CreateUsername = (): JSX.Element => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    gender: "",
    birth_date: "",
    height: "",
    weight: "",
    main_goal: "",
    baseline_activity: "",
    weight_goal: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/createUser", { 
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      // Handle success
      console.log("User created successfully!");
    } else {
      // Handle error 
      console.error("Failed to create user.");
    }
  };

  return (
    <main className="create-username">
      <section className="content-wrapper">
        <div className="background-images">
          <img
            className="background-rectangle"
            alt="Background Rectangle"
            src={rectangle8}
          />
          <img
            className="background-vector"
            alt="Background Vector"
            src={image}
          />
        </div>

        <header className="header">
          <h1 className="header-title">NewStride</h1>
        </header>

        <div className="form-container">
          <h2 className="form-title">Almost there! Create your account.</h2>
          <form className="form">
            <FirstName
              className="form-input"
              text="Email address"
              value={formData.email}
              onChange={handleChange}
              name="email"
            />
            <div className="password-field">
              <FirstName
                className="form-input"
                text="Password"
                value={formData.password}
                onChange={handleChange}
                name="password"
                inputType="password"
              />
              <Eye className="password-eye" property1="default" />
            </div>
            <p className="form-hint">
              Must be at least 10 characters, no spaces.
            </p>
            <Next className="form-submit"/>
          </form>
        </div>
      </section>
    </main>
  );
};

export default CreateUsername;