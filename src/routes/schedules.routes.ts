import { Router } from "express";
import schedulesCreateController from "../controllers/schedules/schedulesCreate.controller";
import schedulesListController from "../controllers/schedules/schedulesList.controller";
import schedulesListPropertiesController from "../controllers/schedules/schedulesListProperties.controller";
import authUserMiddleware from "../middlewares/authUser.middleware";
import isAdmMiddlewar from "../middlewares/isAdm.middleware";
import validateCalenderSchedulesMiddlewar from "../middlewares/validadeCalenderSchedules.Middleware";
import validateHourSchedulesMiddlewar from "../middlewares/validateHourSchedules.Middleware";





const schedulesRoutes = Router()


schedulesRoutes.post("",authUserMiddleware ,validateCalenderSchedulesMiddlewar ,validateHourSchedulesMiddlewar ,schedulesCreateController)
schedulesRoutes.get("/properties/:id",authUserMiddleware ,isAdmMiddlewar,schedulesListPropertiesController)
schedulesRoutes.get("",schedulesListController)
export default schedulesRoutes