import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'

import rootReducer from './reducers';

ReactDOM.render(
    <Provider store={ createStore(rootReducer, applyMiddleware(ReduxThunk)) }>
        <App />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
