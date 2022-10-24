import { Request, Response } from "express";
import schedulesListService from "../../services/schedules/schedulesList.service";



const schedulesListController = async(req: Request, res: Response) => {

    
    const schedulesList = await schedulesListService();

    return res.status(201).json((schedulesList));


};

export default schedulesListController