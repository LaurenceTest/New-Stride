import React, { useState } from "react";
import  HeaderSimple  from "../Components/header_logo_only";
import { RadioGroup } from "../Components/radio_group";
import { FormContent } from "../Components/form_content_box";
import { InputField } from "../Components/input_field";
import { Next } from "../Components/Next";
import "../CSS/demographic.css";


const Demographic = (): JSX.Element => {
  const [birthdate, setBirthdate] = useState("");
  const [sex, setSex] = useState("");

  return (
    <><><HeaderSimple></HeaderSimple></>
    <div className="page-container">
    <main className="demographic">

          <FormContent
              title=""
              instruction="Please select which sex we should use to calculate your calorie needs."
              infoText="We use this information to calculate an accurate calorie goal for you."
          >
              <RadioGroup
                  options={["Male", "Female"]}
                  value={sex}
                  onChange={(value) => setSex(value)} />
              <InputField
                  label="When were you born?"
                  placeholder="Enter your birthdate"
                  type="date"
                  value={birthdate}
                  onChange={(e) => setBirthdate(e.target.value)} />
                  <br></br>
                <div className="button-group">
                  <Next label="Back" to="/question1" className="btn-purple" />
                  <Next label="Next" to="/question3" className="btn-purple" />
                </div>
             
            </FormContent>

      </main></div></>
  );
};

export default Demographic;
