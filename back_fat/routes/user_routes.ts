// @ts-types="npm:@types/express"
import {Router} from "npm:express";
import {checkSchema} from "npm:express-validator"
import { getUser, createUser, updateUser } from "../controllers/users_controller.ts";
import { getPlans } from "../controllers/plans_controller.ts";
import { getGoal, updateGoal } from "../controllers/goals_controller.ts";
import { createWorkout, getWorkouts, updateWorkout } from "../controllers/workouts_controller.ts";
import { userCreateSchema, validateResult, workoutCreateSchema, userUpdateSchema,goalUpdateSchema, workoutUpdateSchema } from "../middleware/validator.ts";

const router = Router()

router.get("/user/plan",getPlans)

router.get("/user/goal",getGoal)
router.put("/user/update",checkSchema(goalUpdateSchema),validateResult,updateGoal)

router.get("/user/workout/:number", getWorkouts)
router.get("/user/workout/", getWorkouts)
router.post("/user/workout", checkSchema(workoutCreateSchema),validateResult, createWorkout)
router.put("/user/workout", checkSchema(workoutUpdateSchema),validateResult, updateWorkout)

router.get("/user",getUser)
router.put("/user", checkSchema(userUpdateSchema),validateResult, updateUser)
router.post("/user", checkSchema(userCreateSchema), validateResult, createUser)

export default router