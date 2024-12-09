// @deno-types="npm:@types/express"
import {Router} from "npm:express";

const router = Router()

router.post("/auth/login")
router.post("/auth/register")
router.post("/auth/refresh")

export default router