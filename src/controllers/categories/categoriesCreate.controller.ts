import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import { ICategoryRequest } from "../../interfaces/categories";
import categoriesCreateService from "../../services/categories/categoriesCreate.service";


const categoriesCreateController = async(req: Request, res: Response) => {

    
    const {name}:ICategoryRequest = req.body;

    const newCategory = await categoriesCreateService({name});

    return res.status(201).json((newCategory));


};

export default categoriesCreateController