import * as actionTypes from './actions';

/* Setting up the initial state */
const initialState = {
    counter: 0,
    results: []
};

/* Creating the reducer */
const reducer = (state = initialState, action) => {

    /* Handling a dispatched action */
    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.value
            }
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})
            }
        case actionTypes.DELETE_RESULT:
            const newResults = state.results.filter((result) => result.id !== action.ElemId);
            return {
                ...state,
                results: newResults
            }    
        default:
    }

    return state;
};

export default reducer;
