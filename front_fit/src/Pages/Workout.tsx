import { useEffect, useState } from "react"
import Header from "../Components/header_user"
import "../CSS/card.css"
import "../CSS/workout.css"
import { Plan } from "../Util/interfaceAPI"
import { useNavigate } from "react-router-dom"

// interface Workout{
//         name:string
//         sets:number
//         reps:number
//         duration:number
// }

const WorkoutsPage = ()=>{
    const [workouts, setWorkouts] = useState<Plan[]>([]);
    const [weight, setWeight] = useState<number | "">("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const navigate = useNavigate()
    const fetchGeneratedPlans = async () => {
        setIsLoading(true);
        setError("");
    
        try {
          const response = await fetch(`/user/plan`);
    
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Failed to generate plans.");
          }
    
          const generatedWorkouts: Plan[] = await response.json(); // Backend returns generated plans
          setWorkouts(generatedWorkouts);
          console.log("Generated Workouts:", generatedWorkouts);
        } catch (err) {
          console.error("Error generating plans:", err);
          setError("Failed to generate workout plans. Please try again.");
        } finally {
          setIsLoading(false);
        }
    };
    useEffect(()=>{
        fetchGeneratedPlans()
    },[])
    const handleSubmit = async(e)=>{
        if (weight === "" || weight <= 0) {
            setError("Please enter a valid weight.");
            return;
          }
        //THIS IS HORRIBLE
        //hush

           const results = workouts.map((workout) => ({
      name: workout.name,
      type: workout.type,
      repetition: workout.repetition,
      sets: workout.sets,
      duration: workout.duration,
      weight: weight, // Use the single weight input value here
      intensity: 7, // Default value for intensity
    }));

    console.log("Submitting results:", results);

    try {
      for (const result of results) {
        const res = await fetch("/user/workout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(result),
        });
        console.log(await res.text());
      }
      navigate("/dashboard");
    } catch (err) {
      console.error("Error submitting results:", err);
      setError("Failed to submit workout results. Please try again.");
    }
  };

    return(
        <>
            <Header/>
            <form onSubmit={handleSubmit}>
                <br></br>
                <div className="weight-input-container">
          <label htmlFor="weight" className="weight-label">

          </label>
          <input
            type="number"
            id="weight"
            className="input-form"
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
            placeholder="Enter your current weight: e.g., 70"
            min="1"
          />
          <div>
          <button
            className="btn-generate-plans btn-purple"
            disabled={isLoading}
            type="submit"
          >
            {isLoading ? "Submitting..." : "Set latest weight"}
          </button>
          {error && <div className="error-message">{error}</div>}
        </div>
        </div><br></br>               
            <WorkoutCard workouts={workouts}/>
            <div className="padderfillo"></div>
            </form>
        </>
    )
}

const WorkoutCard:  React.FC<{ workouts: Plan[] }> = ({ workouts }) => {
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
                        workouts.map((workout: Plan, index) => (
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

const WorkoutHeader: React.FC<{ children?: string }> = ({ children }) => (
    <td className="workout-card-header">{children}</td>
  );
  
  const WorkoutItems: React.FC<Plan> = ({ name, sets, repetition, duration }) => {
    return (
      <tr className="work-row">
        <td className="work-label">{name}</td>
        <td>
          <input
            type="number"
            placeholder={`${sets ?? ""}`}
            className="input-form"
          />
        </td>
        <td>
          <input
            type="number"
            placeholder={`${repetition ?? ""}`}
            className="input-form"
          />
        </td>
        <td>
          <input
            type="number"
            placeholder={`${duration ?? ""}`}
            className="input-form"
          />
        </td>
        <td>
          <input type="checkbox" className="work-done" />
        </td>
      </tr>
    );
  };

export default WorkoutsPage