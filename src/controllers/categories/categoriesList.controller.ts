import { Request, Response } from "express";
import categoriesListService from "../../services/categories/categoriesList.service";

const categoriesListController = async(req: Request, res: Response) => {

    
    const categoriesList = await categoriesListService();

    return res.status(200).json((categoriesList));


};

export default categoriesListController