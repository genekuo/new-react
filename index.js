
import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';

import App from './src/components/App';

const rootReducer = combineReducers({
    form: formReducer
  });
  
const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById("root"));