import { Request, Response, NextFunction } from "express"
import { Schedules } from "../entities/schedules.entity"
import schedulesCreateService from "../services/schedules/schedulesCreate.service"

const validateHourSchedulesMiddlewar = (req: Request, res: Response, next: NextFunction) =>{


    
    if(req.body.hour < "8:00" && req.body.hour > "18:00"){
        return res.status(400).json({
            message: "Invalid hour"
        })
    }

    
    return next()

    }
    
    export default validateHourSchedulesMiddlewar

