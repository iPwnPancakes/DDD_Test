interface IUserRepository{
    save: Promise<User>;
    getUserById: Promise<User>;
    findAllUsers: Promise<Users[]>
}

export class UserRepository implements IUserRepository {
    private constructor(private readonly database) {
        this.userDb = database
    }
    public static async save(user:User) {
        return this.userDb.save(user)
    }
    public static async getUserById(userId: string) {
        return this.userDb.findById(userId)
    }

    public static async findAllUsers() {
        return this.userDb.getAll()
    }


}