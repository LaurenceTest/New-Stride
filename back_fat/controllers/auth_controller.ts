import { Request, Response } from "npm:@types/express";
import User from "../models/users_model.ts";
import bcrypt from "npm:bcrypt"
import { createToken } from "../utils/jwt.ts";
import { MAX_AGE } from "../utils/jwt.ts";

export const loginController = async (req:Request,res:Response)=>{
    const {email, password} = req.body
    const user = await User.findOne({where:{email: email}})
    if(user){
        const auth = await bcrypt.compare(password,user.password)
        if(auth){
            res.cookie('jwt',createToken(user.id),{httpOnly:true, maxAge: MAX_AGE * 1000})
            res.sendStatus(200)
            return
        }
    }else
    res.sendStatus(401)
}

export const logoutController = (_req:Request,res:Response)=>{
    res.clearCookie('jwt').sendStatus(200)
}