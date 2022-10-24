import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer"
import usersListService from "../../services/users/usersList.service";

const usersListController = async(req: Request, res: Response) => {

    
    const usersList = await usersListService();

    return res.status(201).json(instanceToPlain(usersList));


};

export default usersListController
