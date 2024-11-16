import "jsr:@std/dotenv/load";
// @deno-types="npm:@types/express"
import express from "npm:express";
import cookieParser from "npm:cookie-parser"
import sequelize,{syncTables} from "./db_setup.ts";
import User from "./models/users_model.ts";
import Goal from "./models/goals_model.ts";
import Workout from "./models/workouts_model.ts";
import Plan from "./models/plans_model.ts";
import UserRoutes from "./routes/user_routes.ts"
import AuthRoutes from "./routes/auth_routes.ts"
import rateLimiter from "./middleware/rate_limiter.ts";
import { authToken } from "./middleware/auth.ts";

User
Goal
Workout
Plan

try {
  await sequelize.authenticate()
  console.log("Connection has been successfully established")
  syncTables()
} catch (error) {
  console.error("Unable to connect to the database: ",error)
  Deno.exit()
}

const app:express.Application = express()
app.use(express.json())
app.use(cookieParser())
app.use(authToken)
app.use(rateLimiter)
app.use(UserRoutes)
app.use(AuthRoutes)
app.all('/',(req,res)=>{res.status(404).send("Page not found")})
app.listen(4560)