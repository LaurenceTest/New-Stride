import React, { useState, useEffect } from "react";
import  HeaderSimple  from "../Components/header_logo_only";
import { RadioGroup } from "../Components/radio_group";
import { FormContent } from "../Components/form_content_box";
import { InputField } from "../Components/input_field";
import { Next } from "../Components/Next";
import "../CSS/demographic.css";


const Demographic = (): JSX.Element => {
    const [birthdate, setBirthdate] = useState<string>(sessionStorage.getItem("birth_date") || "");
    const [sex, setSex] = useState<string>(sessionStorage.getItem("gender") || "");
    const [isFormValid, setIsFormValid] = useState<boolean>(false); 
    const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState<boolean>(false); 
    const [error, setError] = useState<string>("");

    useEffect(() => {
        if (!birthdate) {
          setIsFormValid(false);
          setError("Please fill out all required fields.");
        } else {
          setIsFormValid(true);
          setError("");
        }
    }, [birthdate]); 

    const handleBirthdateChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
        const newBirthdate = e.target.value;
        setBirthdate(newBirthdate);
        sessionStorage.setItem("birth_date", newBirthdate);
    }

    const handleSexChange = (value:string)=> {
        setSex(value);
        sessionStorage.setItem("gender", value);
    }

    const handleSubmit = () => {
        setHasAttemptedSubmit(true);
    };
    const sexOption = ["FEMALE", "MALE"];

    return (
    <><><HeaderSimple></HeaderSimple></>
    <div className="page-container">
    <main className="demographic">
        <FormContent
            title="About yourself"
            instruction="Gender"
            infoText="We use this information to calculate an accurate plan for you.">
            <RadioGroup
                options={sexOption}
                value={sex}
                onChange={handleSexChange} />
            <InputField
                label="Birthday"
                placeholder="Enter your birthdate"
                type="date"
                value={birthdate}
                onChange={handleBirthdateChange} />
            {hasAttemptedSubmit && !isFormValid && <div className="error">{error}</div>}
            <br></br>
            <div className="button-group">
                <Next label="Back" to="/question1" className="btn-purple" />
                <Next label="Next" to="/question3" className="btn-purple" disabled={!isFormValid}  onClick={handleSubmit}/>
            </div>
             
        </FormContent>

    </main></div></>
  );
};

export default Demographic;
