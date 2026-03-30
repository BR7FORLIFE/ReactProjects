import Header from '../../../shared/components/Header.jsx'
import { Outlet } from 'react-router'

function MainLayout(){

    return(
        <>
            <Header/>
            <Outlet/>
        </>
    )
}

export default MainLayout