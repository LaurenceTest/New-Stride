import HeaderSimple from "../Components/header_logo_only";
import { FormContent } from "../Components/form_content_box";
import { InputField } from "../Components/input_field";
import { Next } from "../Components/Next";
import "../CSS/demographic.css";
import React, { useState } from "react";

const Demographic2 = (): JSX.Element => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [goalWeight, setGoalWeight] = useState("");

  return (
    <><><HeaderSimple></HeaderSimple></>
    <div className="page-container">
    <main className="demographic">
      <FormContent
        title=""
        instruction=""
        infoText=""
      >
      <InputField
          label="Enter your height (cm)"
          placeholder="Height in centimeters"
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />

        <InputField
          label="Enter your weight (kg)"
          placeholder="Weight in kilograms"
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <InputField
          label="What's your goal weight?"
          placeholder="Weight in kilograms"
          type="number"
          value={goalWeight}
          onChange={(e) => setGoalWeight(e.target.value)}
        /><br></br>
        <div className="button-group">
        <Next label= "Back" to= "/question1" className= "btn-purple" />
        <Next label= "Next" to= "/question3" className= "btn-purple"/>
        </div>
       
        
      </FormContent>
    </main></div></>
  );
};

export default Demographic2;
