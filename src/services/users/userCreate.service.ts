import { User } from "../../entities/user.entity";
import AppDataSource from "../../data-source";
import { IUserCreate, IUserRequest } from "../../interfaces/users";
import { v4 as uuidv4} from "uuid";
import bcrypt from "bcrypt";
import { AppError } from "../../errors/appError";


const userCreateService = async({name, email,password,isAdm }:IUserCreate): Promise<User> => {

const userRepository = AppDataSource.getRepository(User);
const users = await userRepository.find();

const emailAlreadyExists = users.find((user) => user.email === email);

if(emailAlreadyExists){
    throw new AppError("Email already exists" )
}

const user = new User()
user.name = name
user.email = email
user.password = bcrypt.hashSync(password, 10)
user.isAdm = isAdm
user.isActive = true
user.createdAt= new Date()
user.updatedAt= new Date()

userRepository.create(user)

await userRepository.save(user)

return user;


}

export default userCreateService
