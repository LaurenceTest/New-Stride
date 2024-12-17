export interface Plan{
    name:string,
    type:string,
    sets?:number,
    repetition?:number,
    duration?:string,
    createdAt:string,
    updatedAt?:string
}

export interface Goal{
    baseline_activity:string,
    main_goal:string,
    weight_goal:number
}