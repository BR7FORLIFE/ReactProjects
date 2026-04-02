import type { User } from "../types/userType";

export const fetchUsers = async (): Promise<User[]> => {
    const req = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!req.ok) {
        throw new Error("users not found!");
    }

    return (await req.json()) as User[];
};
