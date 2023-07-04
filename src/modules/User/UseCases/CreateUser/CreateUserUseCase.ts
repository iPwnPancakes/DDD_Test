import { User } from '../../Entities/User'
import { IUserRepository } from '../../Repositories/UserRepository';

export class CreateUserUseCase {
    constructor(private readonly userRepo: IUserRepository) {}

    async execute(userProps:{firstName: string, lastName:string, email:string}) {
        const userOrError = User.create(userProps)
        if (!!userOrError === true) {
            return await this.userRepo.save(userOrError)
        }

        return {isSuccess: true, user: userOrError}
    }
}