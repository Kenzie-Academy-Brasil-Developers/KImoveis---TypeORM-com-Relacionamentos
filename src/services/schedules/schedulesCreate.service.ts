import AppDataSource from "../../data-source";
import { v4 as uuidv4} from "uuid";
import bcrypt from "bcrypt";
import { AppError } from "../../errors/appError";
import {  IPropertyRequest } from "../../interfaces/properties";
import { Properties } from "../../entities/properties.entity";
import { Addresses } from "../../entities/addresses.entity";
import { ChildEntity } from "typeorm";
import { Categories } from "../../entities/categories.entity";
import { Schedules } from "../../entities/schedules.entity";
import { User } from "../../entities/user.entity";
import { IScheduleRequest } from "../../interfaces/schedules";
import { Request, Response } from "express";


const schedulesCreateService = async({date, hour, userId, propertyId }:IScheduleRequest) => {
    
    const usersRepository = AppDataSource.getRepository(User);
    const findUsers = await usersRepository.findOneBy({
        id: userId
        });
    if(!findUsers){
        throw new AppError("User is not exists", 404 )
        }    


    const propertiesRepository = AppDataSource.getRepository(Properties);
    const findProperties = await propertiesRepository.findOneBy({
        id: propertyId
        });
    if(!findProperties){
        throw new AppError("Property is not exists",404 )
        }
       
        // console.log("CONSOLE.LOG FINSPROPERTIES:",  findProperties) 

        const validateDate = date.split("/")
        const yyyy = Number(validateDate[0])
        const mm = Number(validateDate[1])-1
        const dd = Number(validateDate[2])
        
              
        const dateFormat = new Date(yyyy, mm, dd)
        
        
 
        const schedulesRepository = AppDataSource.getRepository(Schedules);
        const findPropertySchedule = await propertiesRepository.createQueryBuilder('properties')
    .leftJoinAndSelect('properties.schedules', 'schedules')
    .where('properties.id = :id', {id: propertyId})
    .andWhere('schedules.date = :date', {date: date})
    .andWhere('schedules.hour = :hour', {hour: hour})
    .getOne()
    
    if(findPropertySchedule){
        console.log("CONSOLE.LOG FINSCHEDULES:", findPropertySchedule)
        throw new AppError("Schedules already exists",400 )
    }
       
    await schedulesRepository.save({
        date: date,
        hour: hour,
        properties: findProperties,
        user: findUsers
    })
 
}

export default schedulesCreateService


