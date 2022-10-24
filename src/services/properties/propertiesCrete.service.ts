import AppDataSource from "../../data-source";
import { v4 as uuidv4} from "uuid";
import bcrypt from "bcrypt";
import { AppError } from "../../errors/appError";
import {  IPropertyRequest } from "../../interfaces/properties";
import { Properties } from "../../entities/properties.entity";
import { Addresses } from "../../entities/addresses.entity";
import { ChildEntity } from "typeorm";
import { Categories } from "../../entities/categories.entity";


const propertiesCreateService = async({value, size, categoryId, address }:IPropertyRequest) => {


    const propertiesRepository = AppDataSource.getRepository(Properties);
    const properties = await propertiesRepository.find();
    
    const categoriesRepository = AppDataSource.getRepository(Categories);
    const findCategories = await categoriesRepository.findOneBy({
        id: categoryId
    });
    if(!findCategories){
        throw new AppError("Categories is not exists",404 )
    }    
  
    if(address.state.length > 2){
       throw new AppError("Invalid state" )
        }

    if(address.zipCode.length > 8){
      throw new AppError("Invalid zip code" )
        }

    const addressesRepository = AppDataSource.getRepository(Addresses);
    const findAddresses = await addressesRepository.findOne({
        where: {
            city: address.city,
            district: address.district,
            zipCode: address.zipCode,
            state: address.state,
            number: address.number
               }
    });
    if(findAddresses){
        throw new AppError("Address already exists" )
    }
    

    const createAddresses = addressesRepository.create({
            city: address.city,
            district: address.district,
            zipCode: address.zipCode,
            state: address.state,
            number: address.number
    })
    await addressesRepository.save(createAddresses)
        
    
    const property = new Properties()
    property.value = value
    property.size = size
    property.address = createAddresses
    property.category = findCategories
    
    
    propertiesRepository.create(property)
    
    await propertiesRepository.save(property)
    
    return property;
    

}

export default propertiesCreateService



