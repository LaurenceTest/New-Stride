// @ts-types="npm:@types/express"
import {Request, Response} from "npm:express";
import Workout from "../models/workouts_model.ts"
import { ResponseHelper, updateMessage } from "../utils/response.ts";
import { floorLimit } from "../utils/utils.ts";
import sequelize from "../db_setup.ts";

export const getWorkouts = async (req:Request,res:Response)=>{
    const limit = floorLimit(Number(req.params.number ?? 10))
    const workouts = await Workout.findAll({
        where:{
            user_id: req.body.id
        },
        attributes:{exclude:['user_id','updated_at']},
        order:[['createdAt','DESC']],
        limit: limit
    })
    res.status(200).send(workouts)
}

export const getWorkoutTotals = async(_req:Request,res:Response)=>{
    const [results] = await sequelize.query('SELECT SUM(repetition) as repetitions,SUM(sets) as sets from workouts')
    res.send(results)
}

export const createWorkout = async (req:Request,res:Response)=>{
    const {name,id,type,duration,repetition,sets,weight,intensity} = req.body
    try {
        const workout = await Workout.create({
            user_id: id,
            name: name,
            type: type,
            duration: duration,
            repetition: repetition,
            sets: sets,
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