import { User } from "../../entities/user.entity";
import AppDataSource from "../../data-source";
import { IUserRequest } from "../../interfaces/users";
import { v4 as uuidv4} from "uuid";


const usersListService = async () => {

    const userRepository = AppDataSource.getRepository(User);
    const users = await userRepository.find();

    return users;

}

export default usersListService;