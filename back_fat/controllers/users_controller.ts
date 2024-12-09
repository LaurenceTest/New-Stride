// @ts-types="npm:@types/express"
import {Request, Response} from "npm:express";
// @ts-types="npm:@types/bcrypt"
import bcrypt from "npm:bcrypt"
import User from "../models/users_model.ts"
import Goal from "../models/goals_model.ts";
import Plan from "../models/plans_model.ts";
import { promptPlan } from "../utils/ai_helper.ts";
import sequelize from "../db_setup.ts";
import { ResponseHelper, updateMessage } from "../utils/response.ts";
import { createToken,MAX_AGE } from "../utils/jwt.ts";
import { isMale } from "../utils/utils.ts";

export const getUser = async (req:Request,res:Response)=>{
    const user = await User.findOne({
        attributes:{
            exclude: ['id','password','createdAt','updatedAt']
        },
        where:{id:req.body.id}
    })
    res.status(200).send(user)
}

export const createUser = async (req:Request,res:Response)=>{
    const data = req.body
    const transaction = await sequelize.transaction()
    const hashedPassword = await bcrypt.hash(data.password,10)
    try {
        const user = (await User.create({
            username: data.username,
            email: data.email,
            password: hashedPassword,
            birth_date: data.birth_date,
            is_male: isMale(data.gender),
            height: data.height,
            weight: data.weight
        },{
            transaction
        })).dataValues

        data.user_id = user.id

        await Goal.create({
            user_id: user.id,
            main_goal: data.main_goal,
            baseline_activity: data.baseline_activity,
            weight_goal: data.weight_goal
        },{
            transaction
        })

        const generatedPlans = await promptPlan(data)
        await Plan.bulkCreate(generatedPlans,{validate:true,transaction})
        
        res.cookie('jwt',createToken(user.id),{httpOnly:true,maxAge:MAX_AGE * 1000})
        await transaction.commit()

        res.status(201).send(new ResponseHelper(`Sucessfully created user ${data.username}`))
    } catch (error) {
        console.error(error)
        await transaction.rollback()
        res.status(500).send(new ResponseHelper("Failed to create user"))
    }
}

export const updateUser = async (req:Request,res:Response)=>{
    const {id,...contents} = req.body
    contents.gender = contents.gender === "male"
    const [rows] = await User.update(contents,{where: {id: id}})
    const {status,message} = updateMessage("User",rows)
    res.status(status).send(new ResponseHelper(message,{rowsUpdated: rows}))
    res.sendStatus(200)
}