import React from 'react'
import App from './App'
import store from './store/index'
import {Provider} from 'react-redux'


function Root(props) {
    return (
        <Provider store={store}>
            <App {...props}/>
        </Provider>
    )
}

export default Root;