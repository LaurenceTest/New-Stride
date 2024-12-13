import HeaderSimple from "../Components/header_logo_only";
import { FormContent } from "../Components/form_content_box";
import { InputField } from "../Components/input_field";
import { Next } from "../Components/Next";
import "../CSS/demographic.css";
import React, { useState } from "react";

const InputName = (): JSX.Element => {
  const [name, setName] = useState("");

  return (
    <><><HeaderSimple></HeaderSimple></>
    <div className="page-container">
    <main className="demographic">

       <FormContent 
        title="Create a username."
        infoText="We're glad you're here. Let's get to know you a little. What do we call you?">
        <div> 
        <InputField
          placeholder="Enter your username"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br></br>
        </div>
        <div className="button-group">
            <Next label= "Back" to= "/welcome" className= "btn-purple" />
            <Next label= "Next" to= "/question1" className= "btn-purple"/>
        </div>

      </FormContent>
    </main></div></>
  );
};

export default InputName;
