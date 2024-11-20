// @ts-types="npm:@types/express"
import {Router} from "npm:express";
import {checkSchema} from "npm:express-validator"
import { loginController } from "../controllers/auth_controller.ts";
import { loginSchema, validateResult } from "../middleware/validator.ts";

const router = Router()

router.post("/auth/login",checkSchema(loginSchema),validateResult,loginController)
router.post("/auth/refresh")

export default router