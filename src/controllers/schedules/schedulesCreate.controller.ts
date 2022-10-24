import { Request, Response } from "express";
import { AppError } from "../../errors/appError";
import { IScheduleRequest } from "../../interfaces/schedules";
import schedulesCreateService from "../../services/schedules/schedulesCreate.service";


const schedulesCreateController = async(req: Request, res: Response) => {

    try {
        const {date, hour, userId, propertyId }:IScheduleRequest = req.body;
        
        const newSchedules = await schedulesCreateService({date, hour, userId, propertyId });
    
        return res.status(201).json({ message: "Schedule created"});
        
    } catch (error) {
    if(error instanceof AppError){
        return res.status(error.statusCode).json({
            message: error.message
        })
    }        
    }


};

export default schedulesCreateController