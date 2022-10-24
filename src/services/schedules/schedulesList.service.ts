import AppDataSource from "../../data-source";
import { Schedules } from "../../entities/schedules.entity";


const schedulesListService = async () => {

    const schedulesRepository = AppDataSource.getRepository(Schedules);
    const schedules = await schedulesRepository.find();

    return schedules;

}

export default schedulesListService;