// @ts-types="npm:@types/express"
import {Request, Response} from "npm:express";
import Plan from "../models/plans_model.ts"
import { Model } from "npm:sequelize";

export const getPlans = async (req:Request,res:Response)=>{
    const plans:Model[] = await Plan.findAll({
        where: {
            user_id: req.body.id
        }
    })
    res.status(200).send(plans)
}