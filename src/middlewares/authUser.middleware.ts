import {Request, Response, NextFunction} from "express";
import   jwt  from "jsonwebtoken";
import 'dotenv/config';

const authUserMiddleware = (req: Request, res: Response, next: NextFunction) =>{
    let token = req.headers.authorization

    if(!token){
        return res.status(401).json({
            message: 'Invalid token'
        })
    }
    

    token = token.split(" ")[1]
    
    
    jwt.verify(token as string, process.env.SECRET_KEY as string, (error:Error | null, decoded: any) => {
        if(error){
            return res.status(401).json({
                message: 'token Invalid'
            })
        }

        req.user = {
            isActive:decoded.isActive,
            isAdm: decoded.isAdm,
            id: decoded.sub
        }

        return next()

    })

};
export default authUserMiddleware