import {UserModel} from '../Schema/userSchema';
import {User} from '../Entities/User';

export interface IUserRepository{
    save(user: User): Promise<User>;
    getUserById(userId: string): Promise<User | null>;
    getAllUsers(): Promise<User[]>
}

export class UserRepository implements IUserRepository {
    constructor(private readonly userModel: typeof UserModel) {
        this.userModel = UserModel
    }

    async save(user:User): Promise<User> {
        const firstName = user.getFirstName()
        const lastName = user.getLastName()
        const email = user.getEmail()

        await this.userModel.create({ firstName, lastName, email })

        return user
    }

    async getUserById(userId: string): Promise<User | null> {
        return this.userModel.findById(userId)
    }

    async getAllUsers(): Promise<User[]> {
        return this.userModel.find()
    }
}