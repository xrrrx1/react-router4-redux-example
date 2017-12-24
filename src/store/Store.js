import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducers/mainReducer'
import randomIdMiddleware from '../middlewares/randomIdMiddleware'
import apiMiddleware from '../middlewares/apiMiddleware'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const enhancer = applyMiddleware(thunk, logger, randomIdMiddleware, apiMiddleware);

const store = createStore(reducer, {}, enhancer);

//dev
window.store = store;

export default store