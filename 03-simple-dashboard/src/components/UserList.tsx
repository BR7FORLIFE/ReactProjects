import { useQuery } from "@tanstack/react-query" 
import {fetchUsers} from '../api/users.ts'
import type { User } from "../types/userType.ts"

export function ListUser(){
    const {data = [], isLoading, error} = useQuery<User[]>({
        queryKey: ["users"],
        queryFn: fetchUsers
    })

    if(isLoading) return <p>cargando...</p>

    if(error instanceof Error){
        return <p>{error.message}</p>
    }

    return (
        <section>
            {
                data.map((u) => {
                    return (
                        <div key={u.id}>
                            <h1>{u.name}</h1>
                            <p>phone: {u.phone}</p>
                        </div>
                    )
                })
            }
        </section>
    )
}

export default ListUser