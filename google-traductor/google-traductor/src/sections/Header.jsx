import '../styles/Header.css'

function Header(){
    return (
        <>
        <div className="logoContainer">
            <img src="https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-hamburger-menu-button-list-content-png-image_5288864.png" alt="image of menu" />
            <img src="https://i.blogs.es/6f44dd/google-2015-1/1366_2000.jpg" alt="image of google"/>
            <span>Traductor</span>
        </div> 

        <article>
            <img src="https://img.icons8.com/?size=512&id=s5NUIabJrb4C&format=png" alt="image of configuration" />
            <img src="https://images.icon-icons.com/1369/PNG/512/-apps_90405.png" alt="image of menu applications" />
            <img src="https://cdn-icons-png.flaticon.com/512/711/711769.png" alt="user image" />
        </article>
        </>
    )
}

export default Header