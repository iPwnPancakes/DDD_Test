import { userRepo } from "../../Repositories";
import { IUserRepository } from "../../Repositories/UserRepository";

export class GetAllUsersUseCase {
    constructor(userRepo: IUserRepository ){}

    async execute(){
        return userRepo.getAllUsers()
    }

}