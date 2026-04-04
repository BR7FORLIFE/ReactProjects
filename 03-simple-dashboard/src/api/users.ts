import type { User } from "../types/userType";

const APIURL = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = async (): Promise<User[]> => {
    const req = await fetch(APIURL);

    if (!req.ok) {
        throw new Error("users not found!");
    }

    return (await req.json()) as User[];
};

export const getUserByEmail = async (email: string) => {
    try {
        const req = await fetch(`${APIURL}?email=${email}`);

        if (!req.ok) {
            return { data: null, error: "user not found!" };
        }

        const data = await req.json();

        return { data, error: null };
    } catch (error) {
        return { data: null, error: "Network error" };
    }
};
