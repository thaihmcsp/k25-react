const initState = [{id: 1, name: 'ao so mi'}]

export function userReducer (state = initState, action) {
    switch (action.type) {
        case 'product/addProduct':
            return [...state, action.payload];
        
        case 'product/addProduct':
            const index = state.findIndex(function(value){ 
                return value.id === action.payload;
            })
            let clone = [...state];
            clone.splice(index, 1);
            return clone;

        default:
            return state;
    }
}