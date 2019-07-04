import { User } from "../models/user";

export class UserService {

    public static findOne(username: string): User {
        const user = new User();
        return user;
    }

}
