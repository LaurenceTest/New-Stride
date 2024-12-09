import { validationResult, Result, Schema } from "npm:express-validator"
import {Request, Response, NextFunction} from "npm:express"

export const loginSchema:Schema = {
    email:{
        trim: true,
        notEmpty: true,
        escape: true,
        isEmail: true,
        isLength: {options:{min:3}},
    },
    password:{
        notEmpty: true,
        escape: true,
        isLength: {
            options:{
                min:8, max: 32
            },
            errorMessage: "Password minimum length is 8 and maximum of 50"
        }            
    }
}

export const userCreateSchema:Schema = {
    username:{
        trim: true,
        notEmpty: true,
        escape: true,
        isString: true,
        isLength: { 
            options: {
                min : 3, max: 50,
            },
            errorMessage: "Username has invalid length"
        },
    },
    email:loginSchema.email,
    password:loginSchema.password,
    birth_date:{
        notEmpty: true,
        isInt: true
    },
    gender:{
        notEmpty: true,
        matches: {
            options: /^(male|female)$/gi,
            errorMessage: "Must be either 'Male' or 'Female'"
        }
    },
    height:{
        trim:true,
        notEmpty: true,
        escape:true,
        isFloat: true
    },
    weight:{
        trim:true,
        notEmpty: true,
        escape:true,
        isFloat: true
    },
    main_goal:{
        notEmpty: true,
        matches: {
            options: /^(LOSE WEIGHT|MAINTAIN WEIGHT|GAIN MUSCLE)$/gi,
            errorMessage: "Only valid values are: 'LOSE WEIGHT', 'MAINTAIN WEIGHT', 'GAIN MUSCLE'"
        }
    },
    baseline_activity:{
        notEmpty: true,
        matches: {
            options: /^(NOT ACTIVE|LIGHTLY ACTIVE|ACTIVE|VERY ACTIVE)$/gi,
            errorMessage: "Only valid values are: 'NOT ACTIVE', 'LIGHTLY ACTIVE', 'ACTIVE', 'VERY ACTIVE'"
        }
    },
    weight_goal:{
        trim: true,
        notEmpty: true,
        escape: true,
        isFloat: true
    }
}

export const workoutCreateSchema:Schema = {
    name:{
        notEmpty: true,
        escape: true,
        isString: true,
        isLength: {
            options:{
                min: 3,
                max: 50                
            },
            errorMessage: "Name minimum length is 3 and maximum of 50"
        }
    },
    type:{
        notEmpty: true,
        escape: true,
        matches:{
            options: /^(CARDIOVASCULAR,STRENGTH TRAINING)$/gi,
            errorMessage: "Only valid values are: 'CARDIOVASCULAR', 'STRENGTH TRAINING'"
        }
    },
    duration:{
        trim: true,
        notEmpty: true,
        escape: true,
        isTime: {
            options:{
                mode: 'withSeconds'
            },
            errorMessage: "Only allowed time format is HH:MM:SS"
        }
    },
    weight:{
        trim:true,
        notEmpty: true,
        escape:true,
        isFloat: true
    },
    intensity:{
        trim:true,
        notEmpty: true,
        escape:true,
        isFloat: true
    },
}

export const userUpdateSchema:Schema = {
    username: {optional:true,...userCreateSchema.username},
    email: {optional:true, ...loginSchema.email},
    password: {optional:true, ...loginSchema.password},
    birth_date: {optional:true,...userCreateSchema.birth_date},
    height: {optional:true,...userCreateSchema.height},
    gender: {optional:false,...userCreateSchema.gender}
}

export const goalUpdateSchema:Schema = {
    main_goal: {optional:true,...userCreateSchema.main_goal},
    baseline_activity: {optional:true,...userCreateSchema.baseline_activity},
    weight_goal: {optional:true,...userCreateSchema.weight_goal}
}

export const workoutUpdateSchema:Schema = {
    workout_id:{
        notEmpty:true,
        isInt:true
    },
    name: {optional:true,...workoutCreateSchema.name},
    type: {optional:true,...workoutCreateSchema.type},
    duration: {optional:true,...workoutCreateSchema.duration},
    weight: {optional:true,... workoutCreateSchema.weight}
}

export const validateResult = (req:Request,res:Response,next:NextFunction)=>{
    const result:Result = validationResult(req)
    if(result.isEmpty())
        next()
    else
        res.send({errors:result.array()})
    
}