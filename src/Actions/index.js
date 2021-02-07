export const changeMainFilters = (choice) =>{
    return {
        type: choice
    };
};

export const addToBasket = (choice) => {
    return{
        type: 'ADD_ITEM',
        item: choice 
    };
}

export const removeBasket = (choice) =>{
    return{
        type: 'REMOVE_ITEM',
        payload: choice
    }
}