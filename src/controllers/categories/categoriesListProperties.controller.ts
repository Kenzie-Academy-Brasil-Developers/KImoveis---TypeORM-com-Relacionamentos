import { Request, Response } from "express";
import { Categories } from "../../entities/categories.entity";
import categoriesListService from "../../services/categories/categoriesList.service";
import categoriesListPropertiesService from "../../services/categories/categoriesListProperties.service";

const categoriesListPropertiesController = async(req: Request, res: Response) => {

    const idCatergories = req.params.id
    
    const categoriesList = await categoriesListPropertiesService(idCatergories);

    return res.status(200).json((categoriesList));


};

export default categoriesListPropertiesController