import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import reducer from "./store/reducer";

/* Creating the redux store and passing a reducer to it */
const store = createStore(reducer);

/* Connecting the store to the react app to get the state by wrapping the App component
 with a Provider component and passing the store to the provider */
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
serviceWorker.unregister();
