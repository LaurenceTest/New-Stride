import "../CSS/card.css"
import Header from "../Components/header_user"
import runningWoman from "../assets/bgs/woman-running.png"
import "../CSS/dashboard.css"
import "../CSS/mainPage.css"
import { useEffect, useState } from "react"

const Dashboard = ()=>{
    return(
        <div className="dashboard-page">
            <Header/>
            <div className="text-content">
                <div className="tc-text"></div>
                <img src={runningWoman} alt="Running woman" className="featured-image"/>
            </div>
            <div className="card-flex">
                <AgendaCard/>
                <TotalCard/>
            </div>
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
    const [exercises] = useState([{name:"Push Ups",sets:10,reps:9,dur:8},{name:"Push Ups",sets:10,reps:9,dur:8},{name:"Push Ups",sets:10,reps:9,dur:8}, 
        {name:"Push Ups",sets:10,reps:9,dur:8},{name:"Push Ups and test am I rihgt ladies? duhihdwqud overflowing",sets:10,reps:9,dur:8},{name:"Push Ups",sets:10,reps:9,dur:8},
        {name:"Push Ups",sets:10,reps:9,dur:8},{name:"Push Ups and test am I rihgt ladies? duhihdwqud overflowing",sets:10,reps:9,dur:8},{name:"Push Ups",sets:10,reps:9,dur:8}
    ])
    useEffect(()=>{
        fetch('localhost:5173/user/plan')
        .then((res)=>{
            console.log(res)
        })
        fetch('localhost:5173/user/goal')
        .then(res=>{
            console.log(res)
        })
        fetch('localhost/user/workout')
        .then(res=>{
            console.log(res)
        })
    })
    return(
        <div className="card agenda-card">
            <div className="week-s-agenda">
                <button className="agenda-card-btn btn-purple">Done any?</button>
                <section className="agenda-card-design display-weight">
                    <h2>Weight (kg)</h2>
                    <div className="card weight-show">
                        <WeightChart label="Current" weight={432}/>
                        <WeightChart label="Gains" weight={5}/>
                        <WeightChart label="Goal" weight={6}/>
                    </div>
                </section>
            </div>
            <div className="card agenda-card-list">
                {/* FIXME: CSS add */}
                <div className="exercise-col1"></div>
                <div className="exercise-col2"><h3 className="agenda-title">Sets</h3></div>
                <div className="exercise-col3"><h3 className="agenda-title">Reps</h3></div>
                <div className="exercise-col4"><h3 className="agenda-title">Duration</h3></div>
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
            <div className="exercise-col1"><b>{name}</b></div>
            <div className="exercise-col2">{sets}</div>
            <div className="exercise-col3">{reps}</div>
            <div className="exercise-col4">{dur}</div>
        </>
    )
}

const WeightChart:React.FC<{label: string, weight:number}> = ({label, weight})=>{
    return(
        <>
        <div className="printWeight">
            <div className="weight-text">{label}</div>
            <div className="weight-circle">{weight}</div>
        </div>
        </>
    )
}

const TotalCard = ()=>{
    return(
        <div className="card total-card">
            <header className="total-card-title"><h1>Total</h1></header>
            <TotalCardItem value={10}>Sets</TotalCardItem>
            <TotalCardItem value={100}>Reps</TotalCardItem>
            <TotalCardItem value={10000}>Time</TotalCardItem>
        </div>
    )
}

const TotalCardItem:React.FC<{children:string,value:number}> = ({children,value})=>{
    return(
        <>
            <div className="card total-card-item">
                <div className="total-card-text">{children}</div>
                <div className="total-card-circle">{value}</div>
            </div>
        </>
    )
}

export default Dashboard