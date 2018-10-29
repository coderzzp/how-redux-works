import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import createStore from './store/createStore.js'
import {reducer,applyMiddleware} from './redux/index.js'
import {Provider} from 'react-redux'
import reduxThunk from  './middleware/redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'
import logger from 'redux-logger'
const initState={
  chatLog:0
}

const createStoreWithMiddleware = applyMiddleware(
  reduxThunk,
  promiseMiddleware(),
  logger
)(createStore)
const store = createStoreWithMiddleware(reducer,initState)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
