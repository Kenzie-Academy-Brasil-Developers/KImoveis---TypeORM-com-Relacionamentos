import { Router } from "express";
import { createLoginController } from "../controllers/login/loginCreate.controller";





const loginRoutes = Router()


loginRoutes.post("", createLoginController)




export default loginRoutes