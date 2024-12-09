export const floorLimit = (limit:number)=>{
    if(limit >= 50) return 50
    if(limit >= 30) return 30
    return 10
}

const maleRegex = /^(male)$/i
const femaleRegex = /^(female)$/i

export const isMale = (gender:string)=>{
    if(maleRegex.test(gender)) return true
    else if(femaleRegex.test(gender)) return false
    throw new SyntaxError("Gender is not valid")
}