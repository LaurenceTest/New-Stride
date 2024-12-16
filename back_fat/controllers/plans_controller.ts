// @ts-types="npm:@types/express"
import {Request, Response} from "npm:express";
import Plan from "../models/plans_model.ts"
import Goal from "../models/goals_model.ts";
import User from "../models/users_model.ts";
import { Model } from "npm:sequelize";
import { promptPlan } from "../utils/ai_helper.ts";

const genRequests:Array<string> = []

export const getPlans = async (req:Request,res:Response)=>{
    const id = req.body.id
    const plans:Model[] = await Plan.findAll({
        where: {
            user_id: id
        }
    })
    const ipAddress = req.ip
    console.log(plans)
    if(plans.length === 0 && ipAddress){
        if(!genRequests.find(ip=>ip===ipAddress)){
            res.sendStatus(202)
            await generatePlans(id)
            genRequests.splice(genRequests.indexOf(ipAddress))
        }else res.sendStatus(202)
    }else
    res.status(200).send(plans)
}

const generatePlans = async (id:number)=>{
    const userData = await User.findOne({
        where: {
            id,
        },
        attributes:['birth_date','is_male','height','weight','is_male']
    })
    const goalData = await Goal.findAll({
        where:{
            user_id: id
        },
        attributes:['main_goal','baseline_activity','weight_goal']
    })
    if(userData === null || goalData.length === 0) return
    const data = {...userData.dataValues,...goalData[0].dataValues}
    data.user_id = id
    const generatedPlans = await promptPlan(data)
    await Plan.bulkCreate(generatedPlans,{validate:true})
}