import {rateLimit} from "npm:express-rate-limit"

const rateLimiter = rateLimit({
    windowMs: 2 * 60 * 1000,
    limit: 100,
    standardHeaders: 'draft-7',
    legacyHeaders: false
})

export default rateLimiter