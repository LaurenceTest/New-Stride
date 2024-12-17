// @ts-types="npm:@types/express"
import {Router} from "npm:express";
import {checkSchema} from "npm:express-validator"
import { loginController, logoutController } from "../controllers/auth_controller.ts";
import { loginSchema, validateResult } from "../middleware/validator.ts";

const router = Router()

router.post("/auth/login",checkSchema(loginSchema),validateResult,loginController)
router.get("/auth/logout",logoutController)

export default router