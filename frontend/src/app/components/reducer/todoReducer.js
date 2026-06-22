export default function todoReducer(state, action){
    console.log('todoReducer', state, action);
    switch(action.type){
        case "ADD_TODO":
            return [...state, action.payload];
        case "UPDATE_TODO":
            return state.map(td=> td.id === action.payload.id? action.payload : td);
        case "DELETE_TODO":
            return state.filter(td=>td.id!==action.payload.id);
    }
}