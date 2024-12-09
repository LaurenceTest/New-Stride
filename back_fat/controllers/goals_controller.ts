// @ts-types="npm:@types/express"
import {Request, Response} from "npm:express";
import Goal from "../models/goals_model.ts"
import { ResponseHelper, updateMessage } from "../utils/response.ts";

export const getGoal = async (req:Request,res:Response)=>{
    const goal = await Goal.findOne({
        attributes:{
            exclude: ['id','user_id','createdAt','updatedAt']
        },
        where:{
            user_id: req.body.id
        }
    })
    res.status(200).send(goal)
}

export const updateGoal = async (req:Request, res:Response)=>{
    const {id,...contents} = req.body
    const [rows] = await Goal.update(contents,{where:{user_id:id}})
    const {status,message} = updateMessage("Goal",rows)
    res.status(status).send(new ResponseHelper(message,{rowsUpdated: rows}))
}