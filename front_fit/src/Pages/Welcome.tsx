import { Next } from "../components/Next"
import image from "../assets/training_weights_girl.png";
import maskGroup2 from "../assets/training_weights_girl.png";
import maskGroup from "../assets/training_weights_girl.png";
import "../CSS/SignIn.css";

const Welcome = (): JSX.Element => {
  return (
    <section className="sign-up" component="section">
      <div className="content">
        <h1 className="title">
          NewStride
        </h1>
        <h2 className="subtitle">
          Welcome to
        </h2>

        <div className="images">
          <img className="image" alt="Fitness" src={maskGroup2} />
          <img className="image" alt="Healthy Food" src={image} />
          <img className="image" alt="Mindful Eating" src={maskGroup} />
        </div>

        <div className="text-section">
          <p className="text" component="p">
            Ready for some wins?
            <br />
            Start tracking, it’s easy!
          </p>
          <p className="text" component="p">
            Discover the impact of
            <br />
            your food and fitness
          </p>
          <p className="text" component="p">
            And make mindful eating
            <br />a habit for life
          </p>
        </div>

        <Next className="continue-button" to="/createuser" />

      </div>
    </section>
  );
};

export default Welcome;