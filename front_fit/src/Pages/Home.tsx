import "../CSS/mainPage.css";
import HeaderNon from "../Components/header_notuser";
import womanRunningImage from "../assets/bgs/woman-running-fitness.png"; 

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
                <div className="cta-button">
                    <button>START TODAY</button>
                </div>
            </div>
            <div className= "image-content">
                <img src={womanRunningImage} alt="Fitness woman"></img>
            </div>
            </main>
        </>    
    );
}



export default Home;