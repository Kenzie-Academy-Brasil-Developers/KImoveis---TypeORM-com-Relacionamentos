import { Request, Response, NextFunction } from "express"
import { Schedules } from "../entities/schedules.entity"
import schedulesCreateService from "../services/schedules/schedulesCreate.service"

const validateCalenderSchedulesMiddlewar = (req: Request, res: Response, next: NextFunction) =>{


    const validate = req.body.date.split("/")
    
    const yyyy = Number(validate[0])
    const mm = Number(validate[1])-1
    const dd = Number(validate[2])
    
    const dateFormat = new Date(yyyy, mm, dd)
   
    const date = dateFormat.getDay()
   
    

    if(date === 0 || date === 6  ){
        return res.status(400).json({
            message: "Invalid Date"
        })
    }
   
    return next()

    }
    
    export default validateCalenderSchedulesMiddlewar

