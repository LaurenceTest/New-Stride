import "../CSS/mainPage.css";
import { Next } from "../Components/Next"
import HeaderNon from "../Components/header_notuser";
import womanRunningImage from "../assets/bgs/woman-running-fitness.png"; 
// import ImageComponent from "../Components/Image_component";

function Home(){
    return (
        <>
            <HeaderNon></HeaderNon>
            <div className="text-content">
                <div className="tc-text">
                    <p className="tagline">Fitness Tracking Web App</p>
                    <h1>Track your goals with NewStride</h1>
                    <p className="description">
                        Use AI to generate workout plans catered for you!
                    </p>
                    
                    <Next className="white-btn" to="/welcome" label="START TODAY"/>
                </div>

                <div className="tc-image">
                    <img src={womanRunningImage} alt="Fitness woman running" className="featured-image"/>
                </div>
            </div>
        </>    
    );
}



export default Home;