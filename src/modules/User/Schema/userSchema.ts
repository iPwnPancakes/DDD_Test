import mongoose, { Document, Schema } from "mongoose"

interface User extends Document {
    firstName: string;
    lastName: string;
    email: string;
}

const userSchema = new Schema<User>({
    firstName: String,
    lastName: String,
    email: String,
})

export const UserModel = mongoose.model('User', userSchema)