import { IUserRepository } from "../../Repositories/UserRepository";

export class GetAllUsersUseCase {
    constructor(private readonly userRepo: IUserRepository) {}

    async execute() {
        return this.userRepo.getAllUsers();
    }
}