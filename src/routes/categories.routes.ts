import { Router } from "express";
import categoriesCreateController from "../controllers/categories/categoriesCreate.controller";
import categoriesListController from "../controllers/categories/categoriesList.controller";
import categoriesListPropertiesController from "../controllers/categories/categoriesListProperties.controller";
import authUserMiddleware from "../middlewares/authUser.middleware";
import isAdmMiddlewar from "../middlewares/isAdm.middleware";





const categoriesRoutes = Router()


categoriesRoutes.post("",authUserMiddleware ,isAdmMiddlewar,categoriesCreateController)
categoriesRoutes.get("",categoriesListController)
categoriesRoutes.get("/:id/properties",categoriesListPropertiesController)


export default categoriesRoutes