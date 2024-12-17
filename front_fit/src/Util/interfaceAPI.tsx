export interface Plan{
    name:string,
    type:string,
    sets?:number,
    repetition?:number,
    duration?:string,
    createdAt:string,
    updatedAt?:string
}

export interface User{
    id: number
    username:string
    email:string
    password:string
    birth_date:string
    height:number
    weight:number
    is_male:boolean
}

export interface Goal{
    baseline_activity:string,
    main_goal:string,
    weight_goal:number
}

export interface Workout{
    id:number
    name:string
    type:string
    duration:string
    repetition:number
    weight:number
    intensity:number
    createdAt: string
}