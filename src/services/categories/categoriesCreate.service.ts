import AppDataSource from "../../data-source";
import { AppError } from "../../errors/appError";
import { ICategoryRequest } from "../../interfaces/categories";
import { Categories } from "../../entities/categories.entity";


const categoriesCreateService = async({name}:ICategoryRequest): Promise<Categories> => {

const categoriesRepository = AppDataSource.getRepository(Categories);
const categories = await categoriesRepository.find();

const nameAlreadyExists = categories.find((category) => category.name === name);

if(nameAlreadyExists){
    throw new AppError("Category already exists" )
}

const category = new Categories()
category.name = name

categoriesRepository.create(category)

await categoriesRepository.save(category)

return category;


}

export default categoriesCreateService
