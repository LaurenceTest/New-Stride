import "../CSS/card.css"
import Header from "../Components/header_user"
import runningWoman from "../assets/bgs/woman-running.png"
import "../CSS/dashboard.css"
import "../CSS/mainPage.css"
import { useState } from "react"

const Dashboard = ()=>{
    return(
        <div className="dashboard-page">
            <Header username="User"/>
            <div className="text-content">
                <div className="tc-text"></div>
                <img src={runningWoman} alt="Running woman" className="featured-image"/>
            </div>
            {/* <BackgroundView/> */}
            <div className="card-flex">
                <AgendaCard/>
                <TotalCard/>
            </div>
        </div>
    )
}

const BackgroundView = ()=>{
    return(
        <div className="background-wrap">
            <img className="image-front" src={runningWoman}/>
        </div>
    )
}

interface Exercise{
    name:string,
    sets?:number,
    reps?:number,
    dur?:number
}

const AgendaCard = ()=>{
    const [exercises] = useState([{name:"Push Ups",sets:10,reps:9,dur:8},{name:"Push Ups",sets:10,reps:9,dur:8},{name:"Push Ups",sets:10,reps:9,dur:8}])
    return(
        <div className="card agenda-card">
            <button className="agenda-card-btn">Done any?</button>
            <section className="agenda-card-design">Week Agenda</section>
            <div className="card agenda-card-list">
                {/* FIXME: CSS add */}
                <div className="exercise-col1"></div>
                <div className="exercise-col2">Sets</div>
                <div className="exercise-col3">Reps</div>
                <div className="exercise-col3">Duration</div>
                {
                    exercises.map((exercise:Exercise)=>{
                        return(
                            <ExerciseItem {...exercise}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

const ExerciseItem:React.FC<Exercise> = ({name,sets,reps,dur})=>{
    return(
        <>
            <div className="exercise-col1">{name}</div>
            <div className="exercise-col2">{sets}</div>
            <div className="exercise-col3">{reps}</div>
            <div className="exercise-col4">{dur}</div>
        </>
    )
}

const TotalCard = ()=>{
    return(
        <div className="card total-card">
            <header className="total-card-title">Total</header>
            <TotalCardItem>Sets</TotalCardItem>
            <TotalCardItem>Reps</TotalCardItem>
            <TotalCardItem>Time</TotalCardItem>
        </div>
    )
}

const TotalCardItem:React.FC<{children:string}> = ({children})=>{
    return(
        <div className="card total-card-item">{children}</div>
    )
}

export default Dashboard