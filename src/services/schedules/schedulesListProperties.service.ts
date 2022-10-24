import { User } from "../../entities/user.entity";
import AppDataSource from "../../data-source";
import { IUserRequest } from "../../interfaces/users";
import { v4 as uuidv4} from "uuid";
import { Categories } from "../../entities/categories.entity";
import propertiesCreateController from "../../controllers/properties/propertiesCretae.controller";
import { ICategoryListProperties } from "../../interfaces/categories";
import { Properties } from "../../entities/properties.entity";
import { AppError } from "../../errors/appError";
import { IPropertyRequest } from "../../interfaces/properties";
import { Addresses } from "../../entities/addresses.entity";
import { Schedules } from "../../entities/schedules.entity";

const schedulesListPropertiesService = async (idProperties:string ):Promise<Properties> => {
    const propertiesRepository = AppDataSource.getRepository(Properties);
    const findProperties = await propertiesRepository.findOne({
        where:{
            id:idProperties
        },
        relations:{
            schedules:true,
            address: true
            
        
        }
    });

    if(!findProperties){
        throw new AppError("Property not found",404 )
    }    
      
    // console.log("CONSOLE LOG FINDPROPERTIS:", findProperties)
    return findProperties

}

export default schedulesListPropertiesService;