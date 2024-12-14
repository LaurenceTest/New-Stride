import { Next } from "../Components/Next"
import maskGroup from "../assets/training_weights_girl.png";
import "../CSS/SignIn.css";

const Welcome = (): JSX.Element => {
  return (
    <div className="sign-up">
      <div className="si-content">
        <h1 className="title">
          NewStride
        </h1>
        
        <h2 className="subtitle">
          Welcomes you
        </h2>

        <div className="displayWelcome">
          <ImgPreview src={maskGroup} alt="Fitness" t1="Ready for some wins?" t2="Start tracking, it’s easy!"/>
          <ImgPreview src={maskGroup} alt="Fitness" t1="Ready for some wins?" t2="Start tracking, it’s easy!"/>
          <ImgPreview src={maskGroup} alt="Fitness" t1="Ready for some wins?" t2="Start tracking, it’s easy!"/>
        </div>

        <Next className="btn-purple" to="/question1" />

      </div>
    </div>
  );
};

const ImgPreview: React.FC<{ src: string; t1: string; t2:string; alt: string }> = (props) => {
  const { src, t1, t2, alt } = props; // Destructure the props object
  return (
      <div className="ImgDiv">
          <img src={src} alt={alt} className="image" />
          <p className="text">{t1}</p>
          <p className="text">{t2}</p>
      </div>
  );
};

export default Welcome;