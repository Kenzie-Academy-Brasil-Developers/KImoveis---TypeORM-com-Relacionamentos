import { Request, Response } from "express";
import propertiesListService from "../../services/properties/propertiesList.service";



const propertiesListController = async(req: Request, res: Response) => {

    
    
    const propertiesList = await propertiesListService();

    return res.status(200).json((propertiesList));


};

export default propertiesListController