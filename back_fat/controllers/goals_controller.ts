// @deno-types="npm:@types/express"
import {Request, Response} from "npm:express";
import Goal from "../models/goals_model.ts"

export const getGoal = (req:Request,res:Response)=>{
    const goal = Goal.findOne({
        where:{
            user_id: req.params.id
        }
    })
    res.send(goal)
}