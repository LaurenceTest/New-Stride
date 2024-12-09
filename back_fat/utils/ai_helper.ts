import modelAI from "../ai_setup.ts";
import { GenerateContentResult } from "npm:@google/generative-ai";
import Plan from "../models/plans_model.ts";

interface Data{
    user_id: number,
    birth_date:number,
    gender:string,
    height:number,
    weight:number,
    main_goal: string,
    baseline_activity: string,
    weight_goal: string
}

export const promptPlan = (data:Data)=>{
    const prompt = `Your task is to provide a list of exercises along with their recommended duration and repetitions based on the following factors:`+
    ` age, gender, height, weight, whether they live an active lifestyle,`+
    ` to lose or maintain weight or to gain muscles, and their target weight.`+
    ` Format it in this JSON schema\n
[
{
    "name": string (max 5 words),
    "type": enum("CARDIOVASCULAR","STRENGTH TRAINING"),
    "duration": string(HH:mm:ss),
    "repetition": int,
    "sets": int
}]`+
    `\nHere is the person's information:`+
    `\nAge: ${new Date().getFullYear() - new Date(data.birth_date).getFullYear()} years old`+
    `\nGender: ${data.gender}`+
    `\nHeight: ${data.height} cm`+
    `\nWeight: ${data.weight} kg`+
    `\nGoal: ${data.main_goal}`+
    `\nLifestyle: ${data.baseline_activity}`+
    `\nTarget weight: ${data.weight_goal} kg`
    return toJSON(data.user_id,modelAI.generateContent(prompt))
}

const toJSON = (user_id:number,res:Promise<GenerateContentResult>):Promise<Plan[]>=>{
    const jsonPromise:Promise<Plan[]> = new Promise( (resolve,reject)=>{
        res.then(val=>{
            const result:Plan[] = JSON.parse(val.response.text())
            for(const exercise of result){
                exercise.user_id = user_id
                if(exercise.duration === "N/A" || exercise.duration === "00:00:00")exercise.duration = null
                if(exercise.repetition === 0) exercise.repetition = null
            }
            resolve(result)
            setTimeout(()=>reject("Timed Out"),15000)
        })
    })
    return jsonPromise
}