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
    return(
        <>
            <Header username="User"/>
            <WorkoutCard/>
            <div className="padderfillo"></div>
        </>
    )
}

const WorkoutCard = ()=>{
    const [workouts,setWorkouts] = useState([{
        name:"Push Up",
        sets:5,
        reps:5,
        duration:5
    },{
        name:"Push Up",
        sets:5,
        reps:5,
        duration:5
    },{
        name:"Push Up",
        sets:5,
        reps:5,
        duration:5
    }])
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
                {
                    workouts.map((workout:Workout)=>{
                        return(
                            <WorkoutItems {...workout}/>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

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