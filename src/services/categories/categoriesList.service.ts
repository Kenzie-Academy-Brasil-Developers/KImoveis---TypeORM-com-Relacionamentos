import { User } from "../../entities/user.entity";
import AppDataSource from "../../data-source";
import { IUserRequest } from "../../interfaces/users";
import { v4 as uuidv4} from "uuid";
import { Categories } from "../../entities/categories.entity";


const categoriesListService = async () => {

    const categoriesRepository = AppDataSource.getRepository(Categories);
    const categories = await categoriesRepository.find();

    return categories;

}

export default categoriesListService;