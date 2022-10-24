import * as express from "express"
import { IUserUpdateRequest } from "../../interfaces/users"

declare global {
    namespace Express {
        interface Request {
            user: {
                id: string
                isAdm: boolean
                isActive:boolean
            }
        }
    }
}

declare global {
    namespace Express {
        interface Request {
            userEmail: string
            newUser: IUserUpdateRequest
        }
    }
} 