import "../CSS/mainPage.css"
interface InputFieldProps {
    label?: string;
    placeholder: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
  
  export const InputField = ({
    label,
    placeholder,
    type,
    value,
    onChange,
  }: InputFieldProps): JSX.Element => {
    return (
      <div className="input-field">
        {label && <p className="birthdate-label">{label}</p>}
        <input
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={onChange}
          className="input-form"
        />
      </div>
    );
  };
  