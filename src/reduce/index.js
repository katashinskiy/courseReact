import {combineReducers} from 'redux'
import counter from "./counter"
import articles from "./articles"


export default combineReducers({
    counter,
    articles
})