import { CreateUserUseCase } from "./CreateUserUseCase";
import { userRepo } from "../../Repositories";

export const createUserUseCase = new CreateUserUseCase(userRepo)