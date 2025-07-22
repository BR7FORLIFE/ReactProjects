import Layout from '../src/pages/Layout.jsx'
import Header from './sections/Header.jsx'

function App(){
    return (
        <>
        <Layout 
            header={<Header/>}
        />
        </>
    )
}

export default App