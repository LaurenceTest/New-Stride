
import "../CSS/styles.css";
import eye_con from "../assets/elements/eye_icon.svg";
interface Props {
  property1: "default";
  className: any;
}

export const Eye = ({ property1, className }: Props): JSX.Element => {
  return (
    <img
      className={`eye ${className}`}
      alt="Property default"
      src={eye_con}
    />
  );
};
