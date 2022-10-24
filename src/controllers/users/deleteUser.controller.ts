import { User } from "../../entities/user.entity";
import { Request, Response } from "express";
import { IUserDeleteRequest } from "../../interfaces/users";
import deleteUsderService from "../../services/users/deleteUser.service";



const deleteUserController = async(req: Request, res: Response) => {
    
    const {isActive}: IUserDeleteRequest = req.body
    const id: string = req.params.id
    const updatedUser = await deleteUsderService({isActive}, id)

    if(updatedUser instanceof User){
        return res.status(204).json({mesage: "User alterated with sucess!", isActive})
    }
    return res.status(updatedUser[1] as number).json({
        message: updatedUser[0]
    })

};

export default deleteUserController
