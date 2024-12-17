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
    const handleSubmit = (e)=>{
        //THIS IS HORRIBLE
        e.preventDefault()
        enum Col{
            sets = 0,
            reps,
            duration,
            done
        }
        const results = []
        const length = workouts.length
        const inputs = e.target
        let i:number = 0
        for(;i<length;i++){
            const index = (i * 4) + 1
            if(inputs[index + Col.done].checked){
                const repetition = inputs[index + Col.reps].value !== "" ? Number(inputs[index + Col.reps].value) : workouts[i].repetition
                const sets = inputs[index + Col.sets].value !== "" ? Number(inputs[index + Col.sets].value) : workouts[i].sets
                const duration = inputs[index + Col.duration].value !== "" ? Number(inputs[index + Col.duration].value) : workouts[i].duration
                results.push({
                    name: workouts[i].name,
                    type: workouts[i].type,
                    repetition: repetition,
                    sets: sets,
                    duration: duration,
                    weight: 69, //temp
                    intensity: 7
                })
            }
        }
        console.log(results)
        for(const result of results){
            fetch('/user/workout',{
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(result)
            })
            .then(async res=>{
                console.log(await res.text())
            })
        }
        navigate('/dashboard')
    }

    return(
        <>
            <Header/>
            <form onSubmit={handleSubmit}>
                <div>
                    <button
                        className="btn-generate-plans btn-purple"
                        disabled={isLoading}
                        type="submit"
                        >    {isLoading ? "Submitting..." : "Submit Results"}
                    </button>
                    {error && <div className="error-message">{error}</div>}
                </div>
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

const WorkoutHeader:React.FC<{children?:string}> = ({children})=>{
    return(
        <td className="workout-card-header">{children}</td>
    )
}

const WorkoutItems:React.FC<Plan> = ({name,sets,repetition,duration})=>{
    return(
        <tr className="work-row">
            <td className="work-label">{name}</td>
            <td><input type="number" placeholder={`${sets ?? ""}`} className="input-form"/></td>
            <td><input type="number" placeholder={`${repetition ?? ""}`} className="input-form"/></td>
            <td><input type="number" placeholder={`${duration ?? ""}`} className="input-form"/></td>
            <td><input type="checkbox" className="work-done"/></td>
        </tr>
    )
}

export default WorkoutsPage