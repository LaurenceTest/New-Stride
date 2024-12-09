// @ts-types="npm:@types/express"
import {Request, Response} from "npm:express";
import Workout from "../models/workouts_model.ts"
import { ResponseHelper, updateMessage } from "../utils/response.ts";
import { floorLimit } from "../utils/utils.ts";

export const getWorkouts = async (req:Request,res:Response)=>{
    const limit = floorLimit(Number(req.params.number ?? 10))
    const workouts = await Workout.findAll({
        where:{
            user_id: req.body.id
        },
        order:[['createdAt','DESC']],
        limit: limit
    })
    res.status(200).send(workouts)
}

export const createWorkout = async (req:Request,res:Response)=>{
    const {name,id,type,duration,repetition,weight,intensity} = req.body
    try {
        const workout = await Workout.create({
            user_id: id,
            name: name,
            type: type,
            duration: duration,
            repetition: repetition,
            weight: weight,
            intensity:intensity
        })
        res.status(201).send(new ResponseHelper(`Succesfully created workout`,{id:workout.id}))
    } catch (error) {
        console.error(error)
        res.sendStatus(400)
    }
}

export const updateWorkout = async (req:Request,res:Response)=>{
    const {id,workout_id,...contents} = req.body
    const [rows] = await Workout.update(contents,{where:{user_id:id,id:workout_id}})
    const {status,message} = updateMessage("Workouts",rows)
    res.status(status).send(new ResponseHelper(message,{rowsUpdated: rows}))
}