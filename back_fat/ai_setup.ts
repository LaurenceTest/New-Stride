import {GoogleGenerativeAI, GenerativeModel} from "npm:@google/generative-ai"

const key = Deno.env.get("AI_API_KEY") ?? ""
const genAI = new GoogleGenerativeAI(key)
const model:GenerativeModel = genAI.getGenerativeModel({
    model:"gemini-1.5-flash",
    generationConfig:{
        responseMimeType: "application/json"
    }
})
export default model