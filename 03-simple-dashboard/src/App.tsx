import ListUser from "./components/UserList"
import { ReactQueryDevtools } from "react-query-devtools"
import UserForm from "./components/CreateUserForm"

function App() {
  return (
    <>
      <UserForm/>
      <ListUser/>
      <ReactQueryDevtools/>
    </>
  )
}

export default App
