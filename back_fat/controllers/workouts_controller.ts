// @deno-types="npm:@types/express"
import {Request, Response} from "npm:express";
import Workout from "../models/workouts_model.ts"

const floorLimit = (limit:number)=>{
    if(limit >= 50) return 50
    if(limit >= 30) return 30
    return 10
}

export const getWorkouts = (req:Request,res:Response)=>{
    const limit = floorLimit(Number(req.params.number))
    Workout.findAll({
        where:{
            user_id: req.params.id
        },
        order:[['createdAt','DESC']],
        limit: limit
    })
    res.send("secret")
}

export const createWorkout = (req:Request,res:Response)=>{
    const {name,user_id,type,duration,repetition,weight,intensity} = req.body
    Workout.create({
        user_id: user_id,
        name: name,
        type: type,
        duration: duration,
        repetition: repetition,
        weight: weight,
        intensity:intensity
    })
    res.send("Success")
}

export const updateWorkout = (req:Request,res:Response)=>{
    const {id,name,type,duration,repetition,weight,intensity} = req.body
    Workout.update({
        name: name,
        type: type,
        duration: duration,
        repetition: repetition,
        weight: weight,
        intensity:intensity
    },{
        where:id
    })
    res.send("Success")
}