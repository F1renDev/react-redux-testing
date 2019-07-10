import React from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends React.Component {
    
    render() {
        return (
            <div>
                {/* The state now comes not from the state of the component but as a prop from the "connect" functon */}
                <CounterOutput value={this.props.ctr} />
                <CounterControl
                    label="Increment"
/* Dispatching an action on click */
                    clicked={this.props.onIncrementCounter}
                />
                <CounterControl
                    label="Decrement"
                    clicked={this.props.onDecrementCounter}
                />
                <CounterControl
                    label="Add 10"
                    clicked={this.props.onAddCounter}
                />
                <CounterControl
                    label="Subtract 15"
                    clicked={this.props.onSubtractCounter}
                />
            </div>
        );
    }
}

/* Discribing the state i want to get. How the state managed by redux should be mapped to props
to be used in this contaner */
const mapStateToProps = (state) => {
    /* Returning props that should be distributed to this container */
    return {
        ctr: state.counter
    };
};

/* Describing which kind of actions i want to dispatch in this container */
const mapDispatchToProps = (dispatch) => {
/* Returning prop names that hold a reference to a function that should be executed to dispatch an action */
    return {
        onIncrementCounter: () => dispatch({ type: "INCREMENT" }),
        onDecrementCounter: () => dispatch({ type: "DECREMENT" }),
        onAddCounter: () => dispatch({ type: "ADD", value: 10 }),
        onSubtractCounter: () => dispatch({ type: "SUBTRACT", value: 15 }),
    };
};

/* Getting the data from the store by setting up a subscription */
/* Connect is a fucntion that returns a higher order component */
/* I need to pass a configuration for each container (Counter.js in this case) to connect:
1) What piece of state i need for this container
2) Which actions i need to dispatch */
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
