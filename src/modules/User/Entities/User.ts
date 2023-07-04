interface IUserProps{
firstName: string,
lastName: string,
email: string,
}

export class User {
    private constructor(private readonly firstName: string, private readonly lastName: string, private email: string) {}

    public static create(userProps: IUserProps){
        const {firstName, lastName, email} = userProps;
        //skipping value object step here for speed but ideally would handle validation logic
        return new User(firstName, lastName, email)
    }

    getFirstName(): string{
        return this.firstName
    }
    getLastName(): string {
        return this.lastName
    }

    getEmail(): string {
        return this.email
    }

}