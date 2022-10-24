import { Router } from "express";
import authUserMiddleware from "../middlewares/authUser.middleware";
import isAdmMiddlewar from "../middlewares/isAdm.middleware";
import isUserMiddleware from "../middlewares/isUserMiddleware";
import userUpdateSchema from "../serializer/userUpadate.schema";
import validateUserUpdateMiddleware from "../middlewares/validateUpdate.middleware";
import notUpadateIsAdmMiddlewar from "../middlewares/notUpdateIsAdm.middleware";
import userCreateController from "../controllers/users/userCreate.controller";
import usersListController from "../controllers/users/usersList.controller";
import deleteUserController from "../controllers/users/deleteUser.controller";
import updateUserController from "../controllers/users/updateUser.controller";




const usersRoutes = Router()


usersRoutes.post("", userCreateController)
usersRoutes.get("", authUserMiddleware,  isAdmMiddlewar , usersListController)
usersRoutes.delete("/:id",authUserMiddleware,  isAdmMiddlewar,  deleteUserController)
usersRoutes.patch("/:id", authUserMiddleware,  isUserMiddleware, validateUserUpdateMiddleware(userUpdateSchema), notUpadateIsAdmMiddlewar ,updateUserController)


export default usersRoutes