import jwt from "npm:jsonwebtoken"

export const MAX_AGE = 3 * 24 * 60 * 60

export const createToken = (id:number)=>{
    return jwt.sign({id},Deno.env.get("JWT_ACCESS_TOKEN"),{
        expiresIn: MAX_AGE
    })
}