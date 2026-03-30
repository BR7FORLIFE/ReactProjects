import { Route, Routes } from "react-router";
import Home from "../features/home/homePage";
import MainLayout from "../features/home/layout/mainLayout";

export function AppRouter(){
    return (
        <Routes>
            <Route element={<MainLayout/>}>
                <Route path="/" element={<Home/>}/>
            </Route>
            {/*<Route path="/explorer" Component={} />*/}
        </Routes>
    )
}