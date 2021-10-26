import {combineReducers, createStore, applyMiddleware} from 'redux'
import { authReducer } from './authReducer'
import createSagaMiddleware from 'redux-saga'
import { watchAll } from '../saga/sagas';
import { mainReducer } from './mainReducer';

const sagaMiddleware = createSagaMiddleware();

const RootReducer = combineReducers({
    auth: authReducer,
    main: mainReducer
});

export const store = createStore(RootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchAll)