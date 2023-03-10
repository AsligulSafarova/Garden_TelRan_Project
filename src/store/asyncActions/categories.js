import { load_categories_action } from '../reducer/categoriesReducer'
    
export const loadCategories = () => {
    return async dispatch => {
        const response = await fetch("http://localhost:3333/categories/all");
        const data = await response.json();
        dispatch(load_categories_action(data));
    }
}



