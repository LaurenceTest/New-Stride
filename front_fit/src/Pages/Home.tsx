import "../CSS/mainPage.css";
import { Next } from "../Components/Next"
import HeaderNon from "../Components/header_notuser";
import womanRunningImage from "../assets/bgs/woman-running-fitness.png"; 
import ImageComponent from "../Components/Image_component";

function Home(){
    return (
        <>
            <HeaderNon></HeaderNon>
            <div className="text-content">
                <div className="tc-text">
                    <p className="tagline">Fitness Tracking Web App</p>
                    <h1>Reach your goals with NewStride</h1>
                    <p className="description">
                        Build healthy habits with the exercise and calorie tracker
                    </p>
                    
                    <Next className="header-btn" to="/welcome" label="START TODAY &nbsp;&nbsp;&nbsp;>"/>
                </div>

                <div className="tc-image">
                    <img src={womanRunningImage} alt="Fitness woman running" className="featured-image"/>
                </div>
            </div>
        </>    
    );
}



export default Home;