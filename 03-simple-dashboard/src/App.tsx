import ListUser from "./components/UserList"
import { ReactQueryDevtools } from "react-query-devtools"

function App() {
  return (
    <>
      <ListUser/>
      <ReactQueryDevtools/>
    </>
  )
}

export default App
