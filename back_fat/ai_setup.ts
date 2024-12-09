import {GoogleGenerativeAI, GenerativeModel, SchemaType, Schema} from "npm:@google/generative-ai"

const key = Deno.env.get("AI_API_KEY") ?? ""
const schema:Schema = {
    description: "List of exercises",
    type: SchemaType.ARRAY,
    items:{
        type: SchemaType.OBJECT,
        properties:{
            name:{
                description: "The name of an exercise",
                type: SchemaType.STRING,
                nullable: false
            },
            type:{
                description: "Type of exercise, only cardiovascular or strength training",
                type: SchemaType.STRING,
                nullable: false
            },
            duration:{
                description: "How long the exercise should be performed",
                type: SchemaType.STRING,
                nullable: false
            },
            repetition:{
                description: "How many times the exercise needs to be repeated",
                type: SchemaType.STRING,
                nullable: false
            }
        }
    }
}
const genAI = new GoogleGenerativeAI(key)
const model:GenerativeModel = genAI.getGenerativeModel({
    model:"gemini-1.5-flash",
    generationConfig:{
        responseMimeType: "application/json",
        responseSchema: schema
    }
})
export default model
// const AIModel = ()=>{
//     if(!model){
//         if(key){
//             const genAI = new GoogleGenerativeAI(key)
//             model = genAI.getGenerativeModel({model:"gemini-1.5-flash"})
//         }else{
//             console.log("AI API Key Missing. Closing the application now...")
//             Deno.exit()
//         }
//     }
//     return model
// }

// export default AIModel