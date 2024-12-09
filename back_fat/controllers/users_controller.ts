// @deno-types="npm:@types/express"
import {Request, Response} from "npm:express";
// @deno-types="npm:@types/sequelize"
import { Model } from "npm:sequelize"
import User from "../models/users_model.ts"
import Goal from "../models/goals_model.ts";
import Plan from "../models/plans_model.ts";
import modelAI from "../ai_setup.ts";
import sequelize from "../db_setup.ts";

export const getUser = async (req:Request,res:Response)=>{
    if(req.params.id){
        const all = await User.findByPk(req.params.id)
        res.send(all)
    }
}

const promptPlan = async (data)=>{
    const prompt = `Create a list of exercises for a ${data.gender} with a height of ${data.height}centimeters and weight of ${data.weight}kilograms. `+
    `This person is ${data.baseline_activity} when it comes to their daily life. `+
    `The goal of working out is to ${data.main_goal} and have a weight goal of ${data.weight_goal}kilograms`
    console.log(prompt)
    return modelAI.generateContent(prompt)
}

export const createUser = async (req:Request,res:Response)=>{
    const data = req.body
    const transaction = await sequelize.transaction()
    try {
        const plan = promptPlan(data)
        const user = await User.create({
            username: data.username,
            email: data.email,
            password: data.password,
            birth_date: data.birth_date,
            gender: data.gender === "male",
            height: data.height,
            weight: data.weight
        },{
            transaction: transaction
        })
        await Goal.create({
            user_id: user.id,
            main_goal: data.main_goal,
            baseline_activity: data.baseline_activity,
            weight_goal: data.weight_goal
        },{
            transaction: transaction
        })
        // await transaction.commit()
        await transaction.rollback()
        res.send((await plan).response.text())
    } catch (error) {
        console.error(error)
        await transaction.rollback()
        res.send("Failed to create user")
    }
}

export const updateUser = (req:Request,res:Response)=>{
    res.send("Not yet implemented")
}