import { IUserRepository, UserRepository } from "../../modules/User/Repositories/UserRepository";
import { UserModel } from "../../modules/User/Schema/userSchema";
import { CreateUserUseCase } from "../../modules/User/UseCases/CreateUser/CreateUserUseCase";
import { GetAllUsersUseCase } from "../../modules/User/UseCases/GetAllUsers/GetAllUsersUseCase";

export class ProdCompositionRoot {
    public makeGetAllUsersUseCase(): GetAllUsersUseCase {
        return new GetAllUsersUseCase(this.createUserRepository());
    }

    private createUserRepository(): IUserRepository {
        return new UserRepository(UserModel);
    }
    
    public makeCreateUserUseCase(): CreateUserUseCase {
        return new CreateUserUseCase(this.createUserRepository());
    }
}