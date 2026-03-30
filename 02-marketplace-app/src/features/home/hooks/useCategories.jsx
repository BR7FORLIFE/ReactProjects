import { useState } from 'react';
import {Categories} from '../services/CategoriesService'
import { useEffect } from 'react';

function useCategory(){
    const [categories, setCategories] = useState([])


    useEffect(() => {
        const categoriesFetch = async () => {
            const getCategories = await Categories()
            setCategories(getCategories)
        }

        categoriesFetch()
    },[])

    return {categories}

}

export { useCategory }