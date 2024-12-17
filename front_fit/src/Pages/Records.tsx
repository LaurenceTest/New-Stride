import { useEffect, useState } from "react"
import "../CSS/card.css"
import Header from "../Components/header_user"
import { VictoryPie } from "victory"

const RecordsPage = ()=>{
    const [weights,setWeights] = useState<Array<number>>([])
    useEffect(()=>{
        fetch('/user/workout',{method:'GET'})
        .then(res=>{
            console.log(res)
        })
    })
    return(
        <>
            <Header/>
            <div className="card"></div>
            <WeightCard weights={weights} />
        </>
    )
}

const WeightCard:React.FC<{weights:Array<number>}> = ({weights})=>{
    return(
        <div className="card">{weights.map(weight=>weight)}</div>
    )
}

export default RecordsPage