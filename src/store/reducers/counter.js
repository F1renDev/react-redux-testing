import * as actionTypes from '../actions';

/* Setting up the initial state */
const initialState = {
    counter: 0
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
        default:
    }

    return state;
};

export default reducer;

