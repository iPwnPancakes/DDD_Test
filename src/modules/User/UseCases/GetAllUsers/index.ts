import { GetAllUsersUseCase } from "./GetAllUsersUseCase";
import { userRepo } from "../../Repositories";

export const getAllUsersUseCase = new GetAllUsersUseCase(userRepo)