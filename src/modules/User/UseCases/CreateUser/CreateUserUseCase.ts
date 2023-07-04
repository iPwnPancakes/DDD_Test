import {User} from '../../Entities/User'
import { UserRepository, IUserRepository } from '../../Repositories/UserRepository';

export class CreateUserUseCase {
    private userRepo: IUserRepository;

    constructor(userRepo: IUserRepository){
        this.userRepo = userRepo
    }

    async execute(userProps:{firstName: string, lastName:string, email:string}) {
        const userOrError = User.create(userProps)
        if (!!userOrError === true) {
            return await this.userRepo.save(userOrError)
        }

        return {isSuccess: true, user: userOrError}
    }


}