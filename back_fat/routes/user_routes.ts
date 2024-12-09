// @deno-types="npm:@types/express"
import {Router} from "npm:express";
import { getUser, createUser, updateUser } from "../controllers/users_controller.ts";
import { getPlans } from "../controllers/plans_controller.ts";
import { getGoal } from "../controllers/goals_controller.ts";
import { createWorkout, getWorkouts, updateWorkout } from "../controllers/workouts_controller.ts";

const router = Router()

router.get("/user/:id/plans",getPlans)

router.get("/user/:id/goal",getGoal)

router.get("/user/:id/workout/:number", getWorkouts)
router.post("/user/:id/workout", createWorkout)
router.put("/user/:id/workout", updateWorkout)

router.get("/user/:id",getUser)
router.put("/user/:id", updateUser)
router.post("/user", createUser)

export default router