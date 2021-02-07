export const initialState = {
    arr:[]
}


const basketReducer = (state = initialState, action) => {
    switch (action.type){
    case 'ADD_ITEM' :
        return { 
            ...state,
            arr: state.arr.concat(action.item)
        }
    case 'REMOVE_ITEM' :
        return {
            arr: [    ...state.arr.slice(0, action.payload),
                ...state.arr.slice(action.payload + 1)]
        }
        default:
            return state;
    }
    };

export default basketReducer