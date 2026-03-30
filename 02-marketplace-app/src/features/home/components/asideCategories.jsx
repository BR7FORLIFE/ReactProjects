import {useCategory} from '../hooks/useCategories'

function AsideCategories(){
    const { categories } = useCategory()


    return (
        <aside className='w-1/5 h-full flex flex-col items-center'>
            <span className='font-space font-semibold text-neutral-700 text-sm'>CATEGORIES</span>
            <div className='w-full'>
                <ul className='mt-6 flex flex-col gap-4 justify-center items-center'>
                {
                    categories.map(({id, name}) => {
                        return (
                            <button key={id} className='w-2/3 h-8 rounded-xl py-6 px-4 text-center flex justify-center items-center'>
                                {name}
                            </button>
                        )
                    })
                }
                </ul>
            </div>
        </aside>
    )
}

export default AsideCategories