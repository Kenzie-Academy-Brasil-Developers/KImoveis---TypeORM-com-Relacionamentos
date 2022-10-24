import { Request, Response } from "express";
import { Categories } from "../../entities/categories.entity";
import schedulesListPropertiesService from "../../services/schedules/schedulesListProperties.service";

const schedulesListPropertiesController = async(req: Request, res: Response) => {

    const idProperties = req.params.id
    
    const schedulesList = await schedulesListPropertiesService(idProperties);

    return res.status(200).json((schedulesList));


};

export default schedulesListPropertiesController