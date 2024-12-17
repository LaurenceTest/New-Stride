import { useState } from "react"
import Header from "../Components/header_user"
import "../CSS/card.css"
import "../CSS/workout.css"

interface Workout{
        name:string
        sets:number
        reps:number
        duration:number
}

const WorkoutsPage = ()=>{
    const [workouts, setWorkouts] = useState<Workout[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const fetchGeneratedPlans = async () => {
        setIsLoading(true);
        setError("");
    
        try {
          const response = await fetch(`/user/workout`, {
            method: "POST",
          });
    
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Failed to generate plans.");
          }
    
          const generatedWorkouts: Workout[] = await response.json(); // Backend returns generated plans
          setWorkouts(generatedWorkouts);
          console.log("Generated Workouts:", generatedWorkouts);
        } catch (err) {
          console.error("Error generating plans:", err);
          setError("Failed to generate workout plans. Please try again.");
        } finally {
          setIsLoading(false);
        }
    };

    return(
        <>
            <Header/>
            <div>
                <button
                    onClick={fetchGeneratedPlans}
                    className="btn-generate-plans btn-purple"
                    disabled={isLoading}
                >    {isLoading ? "Generating..." : "Generate Plans"}
                </button>
                {error && <div className="error-message">{error}</div>}
            </div>
            <WorkoutCard workouts={workouts}/>
            <div className="padderfillo"></div>
        </>
    )
}

const WorkoutCard:  React.FC<{ workouts: Workout[] }> = ({ workouts }) => {
    return(
        <div className="card workout-card">
            <h1 className="workout-card-title">Workout Plan</h1>
            <table className="work-table">
                <thead>
                    <tr>
                        <WorkoutHeader></WorkoutHeader>
                        <WorkoutHeader>Sets</WorkoutHeader>
                        <WorkoutHeader>Reps</WorkoutHeader>
                        <WorkoutHeader>Duration</WorkoutHeader>
                        <WorkoutHeader>Done?</WorkoutHeader>
                    </tr>
                </thead>
                <tbody>
                    {workouts.length > 0 ? (
                        workouts.map((workout: Workout, index) => (
                        <WorkoutItems key={index} {...workout} />
                    ))
                    ) : (
                    <tr>
                        <td colSpan={5} className="no-data-message">
                            No workouts available. Generate a plan!
                        </td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

const WorkoutHeader:React.FC<{children?:string}> = ({children})=>{
    return(
        <td className="workout-card-header">{children}</td>
    )
}

const WorkoutItems:React.FC<Workout> = ({name,sets,reps,duration})=>{
    return(
        <tr className="work-row">
            <td className="work-label">{name}</td>
            <td><input type="number" placeholder={`${sets}`} className="input-form"/></td>
            <td><input type="number" placeholder={`${reps}`} className="input-form"/></td>
            <td><input type="number" placeholder={`${duration}`} className="input-form"/></td>
            <td><input type="checkbox" className="work-done"/></td>
        </tr>
    )
}

export default WorkoutsPage