import { Request, Response, NextFunction } from "express"


const notUpadateIsAdmMiddlewar = (req: Request, res: Response, next: NextFunction) =>{


    
    if(req.body.isAdm !== undefined || req.body.isActive !== undefined || req.body.id !== undefined  ){
        return res.status(401).json({
            message: 'Update isAdm not authrized'
        })
    }

   
    return next()

    }
    
    export default notUpadateIsAdmMiddlewar