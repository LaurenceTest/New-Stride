// @deno-types="npm:@types/express"
import {Request, Response} from "npm:express";
import Plan from "../models/plans_model.ts"

export const getPlans = (req:Request,res:Response)=>{
    const plans = Plan.findAll({
        where: {
            id: req.params.id
        }
    })
    res.send(plans)
}