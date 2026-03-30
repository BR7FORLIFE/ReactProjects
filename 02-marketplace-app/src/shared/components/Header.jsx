
const icons = [
    {
        id: "search",
        imageUrl: "resources/search.svg",
        alt: "search icon"
    },
    {
        id: "shopping",
        imageUrl: "resources/shopping-cart.svg",
        alt: "shoping icon"
    },
    {
        id: "profile",
        imageUrl: "resources/profile.svg",
        alt: "profile icon"
    }
]


function Header(){
    return (
        <section className="w-full h-16 flex justify-around items-center font-space border-b border-neutral-500">
            {/* section de titulo y menu */}
            <div className="inline-flex justify-center items-center gap-2">
                <button>
                    <img src="resources/menu.svg" alt="menu icon" className="w-6"/>
                </button>
                <a href="" className="font-space text-xl text-primary font-semibold">BR7MARKETPLACE</a>
            </div>

            {/*seccion de los diferentes nav o items */}
            <nav>
                <ul className="flex gap-12 font-medium text-neutral-600 transition [&>a]:hover:text-primary [&>a]:duration-150 [&>a]:ease-in-out [&>a]:cursor-pointer">
                    <a>Home</a>
                    <a>Explore</a>
                    <a>Deals</a>
                    <a>Sell</a>
                </ul>
            </nav>

            <div className="w-1/3 h-2/3 relative">
                <img src="resources/search.svg" alt="search input icon" className="absolute w-6 top-2 left-2 opacity-60"/>
                <input type="text" placeholder="Buscar" className="w-full h-full bg-[#e7e8e9] rounded-xl pl-12"/>
            </div>
            {/* section de buscar, carrito y perfil */}
            <div className="w-1/8 inline-flex justify-center items-center gap-6">
                {
                    icons.map(({id, imageUrl, alt}) => {
                        return (
                            <img key={id} src={imageUrl} alt={alt} className="w-6"></img>
                        )
                    })
                }
            </div>

        </section>
    )
}

export default Header