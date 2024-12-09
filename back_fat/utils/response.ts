export class ResponseHelper{
    message:string
    data?:object
    constructor(message:string,data?:object) {
        this.message = message
        this.data = data
    }
}

export const updateMessage = (name:string,changes:number)=>{
    if(changes === 0) return {status:204,message: `${name} failed to update`}
    else return {status:201,message: `${name} successfully updated`}
}