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


const categoriesListPropertiesService = async (idCatergories:string ) :Promise<Categories> => {
    const categoriesRepository = AppDataSource.getRepository(Categories);
    
       
    const categories = await categoriesRepository.findOne({
        where:{
            id:idCatergories
        },
        relations:{
            properties:true
        
        }
    });
   
    if(!categories){
        throw new AppError("Category is not exists",404 )
    }    
    


    return categories

}

export default categoriesListPropertiesService;