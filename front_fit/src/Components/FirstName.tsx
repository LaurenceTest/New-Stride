import { useState } from "react";
import "../CSS/styles.css";
import "../CSS/SignIn.css"

interface Props {
  className: string;
  text: string;
  inputType: string;
  value: string; 
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FirstName = ({
  className,
  text = "Email address",
  inputType = "email",
  value,
  onChange,
}: Props): JSX.Element => {
  return (
    <input
      className={`first-name ${className}`}
      placeholder={text}
      type={inputType}
      value={value}
      onChange={onChange}
    />
  );
};
