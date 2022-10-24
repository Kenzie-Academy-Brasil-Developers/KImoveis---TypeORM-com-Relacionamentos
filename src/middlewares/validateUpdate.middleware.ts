import { Request, Response, NextFunction} from 'express';
import * as yup from "yup" ;
import { IUserCreate, IUserUpdateRequest } from '../interfaces/users'
import {SchemaOf} from "yup";
import userUpdateSchema from '../serializer/userUpadate.schema';

const validateUserUpdateMiddleware = (schema: SchemaOf<IUserUpdateRequest>) => 
async (
    req: Request, 
    res: Response, 
    next: NextFunction) => {
        try {
               
        
        const data: IUserUpdateRequest = req.body

        

        try {
            
            const validatedData = await schema.validate(
                data, 
                { 
                    abortEarly: false,
                    
                    stripUnknown: true
                })
            
            
            req.newUser = validatedData
                
            
            next()

        } catch (err: any) {
   
            return res.status(400).json({
                error: err.errors?.join(', ')
            })
        }

    } catch (err) {
    
        next(err)
    }
}
export default validateUserUpdateMiddleware