import React from 'react';
import { render } from "react-dom";
import { Provider } from "react-redux";
import './styles/index.css';
import Home from './pages/Home';
import * as serviceWorker from './utils/serviceWorker';
import { createStore } from "redux";
import rootReducer from "../src/reducers/meta";

const store = createStore(rootReducer);

render(
    <Provider store={store}>
        <Home />
    </Provider>,
    document.getElementById("root")
);

serviceWorker.unregister();