// @ts-types="npm:@types/jsonwebtoken"
import jwt from "npm:jsonwebtoken"
import { Request, Response, NextFunction } from "npm:@types/express";

export const authToken = (req:Request, res:Response, next:NextFunction)=>{
    const token = req.cookies.jwt
    const accessToken = Deno.env.get("JWT_ACCESS_TOKEN")
    if(req.url === '/user' && req.method === 'POST') next()
    else if(token && accessToken){
        try {
            jwt.verify(token, accessToken)
            const decodedToken = jwt.decode(token)
            if(typeof decodedToken === 'string' || decodedToken === null){
                res.sendStatus(400)
            }else{
                req.body.id = decodedToken.id
                next()
            }
        } catch {
            res.sendStatus(403)
            return
        }
    }
    else
    res.sendStatus(401)
}