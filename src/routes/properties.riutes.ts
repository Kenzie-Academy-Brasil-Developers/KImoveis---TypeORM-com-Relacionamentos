import { Router } from "express";
import propertiesCreateController from "../controllers/properties/propertiesCretae.controller";
import propertiesListController from "../controllers/properties/propertiesList.controller";
import authUserMiddleware from "../middlewares/authUser.middleware";
import isAdmMiddlewar from "../middlewares/isAdm.middleware";





const propertiesRoutes = Router()


propertiesRoutes.post("",authUserMiddleware ,isAdmMiddlewar,propertiesCreateController)
propertiesRoutes.get("",propertiesListController)

export default propertiesRoutes