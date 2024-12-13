import React from "react";
import "../CSS/radiogroup.css";

interface RadioGroupProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

export const RadioGroup = ({
  options,
  value,
  onChange,
}: RadioGroupProps): JSX.Element => {
  return (
    <div className="radio-group">
      {options.map((option) => (
        <div key={option} className="radio-option">
          <input
            id={option}
            type="radio"
            name="goal"
            value={option}
            checked={value === option}
            onChange={() => onChange(option)}
          />
          <label htmlFor={option} className={value === option ? "selected" : ""}>
            {option}
          </label>
        </div>
      ))}
    </div>
  );
};
