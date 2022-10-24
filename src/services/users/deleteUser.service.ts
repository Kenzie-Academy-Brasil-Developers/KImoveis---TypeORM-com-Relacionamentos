import { User } from "../../entities/user.entity";
import AppDataSource from "../../data-source";
import { IUserDeleteRequest, IUserUpdateRequest  } from "../../interfaces/users";
import { AppError } from "../../errors/appError";


const deleteUsderService = async({ isActive  }: IUserDeleteRequest, id: string): Promise<User> => {

    const userRepository = AppDataSource.getRepository(User)

    const findUser = await userRepository.findOneBy({
        id
    })

    if(!findUser){
        throw new AppError('User not found', 404)
    }

    if(!findUser.isActive){
        throw new AppError('User not active', 400)
    }
   
    await userRepository.update(
        id,
        {
            isActive: false 
                  }
    )

    const user = await userRepository.findOneBy({
        id
    })

    return user!

}

export default deleteUsderService;
