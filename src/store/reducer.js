/* Setting up the initial state */
const initialState = {
    counter: 0
};

/* Creating the reducer */
const reducer = (state = initialState, action) => {
/* Handling a dispatched action */    
    if (action.type === "INCREMENT") {
        return {
            ...state,
            counter: state.counter + 1
        };
    }
    return state;
};

export default reducer;
