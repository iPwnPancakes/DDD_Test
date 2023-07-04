import { UserModel } from "../Schema/userSchema";
import { UserRepository } from "./UserRepository";

export const userRepo = new UserRepository(UserModel)