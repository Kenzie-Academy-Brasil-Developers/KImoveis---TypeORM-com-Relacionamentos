import { User } from "../../entities/user.entity";
import { Request, Response } from "express";
import { IUserUpdateRequest } from "../../interfaces/users"; 
import { instanceToPlain } from "class-transformer";
import updateUserService from "../../services/users/updateUser.service";


const updateUserController = async (req: Request, res: Response) => {
        const {name,email,password}: IUserUpdateRequest = req.newUser
        const id: string = req.params.id
        
                
        const updatedUser = await updateUserService({name,email,password}, id)
            return res.json(instanceToPlain(updatedUser))
        
       
   
}


export default updateUserController
