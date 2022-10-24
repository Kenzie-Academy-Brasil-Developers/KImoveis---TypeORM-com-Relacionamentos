import { Request, Response } from "express";
import { IUserRequest, IUserLogin } from "../../interfaces/users"; 
import loginCreateService from "../../services/login/loginCreate.service";


const createLoginController = async (req: Request, res: Response) => {

        const createLogin: IUserLogin = req.body;
        const token = await loginCreateService(createLogin)
        return res.status(200).json({token})

   
    };
    

export {createLoginController}