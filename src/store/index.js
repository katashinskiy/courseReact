import {createStore} from "redux"
import reducer from "../reduce/index"

const store = createStore(reducer);

window.store = store;

export default store;

