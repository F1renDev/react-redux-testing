import * as actionTypes from '../actions';

/* Setting up the initial state */
const initialState = {
    results: []
};

/* Creating the reducer */
const reducer = (state = initialState, action) => {

    /* Handling a dispatched action */
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.result})
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
