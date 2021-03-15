import { createStore } from "redux";
import {devToolsEnhancer} from 'redux-devtools-extension'
import rootReducer from "./rootReducer.js";

function confi() {
    return createStore(rootReducer,devToolsEnhancer())
}

export default confi
