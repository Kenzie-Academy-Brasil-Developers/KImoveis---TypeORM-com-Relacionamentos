import { Request, Response } from "express";
import { IPropertyRequest } from "../../interfaces/properties";
import propertiesCreateService from "../../services/properties/propertiesCrete.service";


const propertiesCreateController = async(req: Request, res: Response) => {

    
    const createProperties:IPropertyRequest = req.body;

    const newproperties = await propertiesCreateService(createProperties);

    return res.status(201).json((newproperties));


};

export default propertiesCreateController