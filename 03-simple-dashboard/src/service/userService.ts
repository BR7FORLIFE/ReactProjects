import { type FormData } from "../schemas/UserSchema";
import { getUserByEmail } from "../api/users";

async function validateUser(user: FormData) {
    const { data, error } = await getUserByEmail(user.email);

    if (error) {
        return false;
    }

    if (data) {
        return true;
    }
}

export default validateUser;
