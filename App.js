import React, {Component} from 'react';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import BufferReducer from './reducers';
import Contacts from './Caller';
import LoginComponent from './login';
class PHONE extends Component{
    render(){
        const store = createStore(BufferReducer)
        return(
            <Provider store={store}>
                <Contacts />
            </Provider>
        );
    }
}

export default PHONE;