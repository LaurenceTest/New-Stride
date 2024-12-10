import "../CSS/mainPage.css";
import { Next } from "../components/Next"
import HeaderNon from "../Components/header_notuser";
import womanRunningImage from "../assets/bgs/woman-running-fitness.png"; 
import ImageComponent from "../components/Image_component";
function Home(){
    return (
        <>
            <HeaderNon></HeaderNon>
            <main className="main-section">
            <div className="text-content">
                <p className="tagline">#1 Nutrition Tracking Web App</p>
                <h1>Reach your goals with NewStride</h1>
                <p className="description">
                    Build healthy habits with the exercise and calorie tracker
                </p>
                
                <Next className="continue-button" to="/welcome" label="START TODAY"/>
                
            </div>
            <ImageComponent
            src={womanRunningImage}
                alt="Fitness woman running"
                className="featured-image" 
      />
            </main>
        </>    
    );
}



export default Home;