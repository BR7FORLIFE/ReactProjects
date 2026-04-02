import { useQuery } from "@tanstack/react-query" 
import {fetchUsers} from '../api/users.ts'
import type { User } from "../types/userType.ts"
import styles from '../styles/ListUser.module.css'

function ListUser(){
    const {data = [], isLoading, error} = useQuery<User[]>({
        queryKey: ["users"],
        queryFn: fetchUsers
    })

    if(isLoading) return <p>cargando...</p>

    if(error instanceof Error){
        return <p>{error.message}</p>
    }

    return (
    <section className={styles.container}>
      {data?.map((u) => (
        <div key={u.id} className={styles.card}>
          <h1 className={styles.name}>{u.name}</h1>
          <p className={styles.phone}>📞 {u.phone}</p>
        </div>
      ))}
    </section>
    )
}

export default ListUser