import React from 'react';
import { render } from "react-dom";
import { Provider } from "react-redux";
import './styles/index.css';
import Home from './pages/Home';
import * as serviceWorker from './utils/serviceWorker';
import { createStore } from "redux";
import rootReducer from "./redux/meta-reducer";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Question from "./pages/Question";

const store = createStore(rootReducer);

render(
    <BrowserRouter>
    <Provider store={store}>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/question' component={Question}/>
        </Switch>
    </Provider>
    </BrowserRouter>,
    document.getElementById("root")
);

serviceWorker.unregister();