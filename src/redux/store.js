import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { userReducer, counterReducer, studentReducer } from './reducers'
import createSaga from 'redux-saga'
import { userSaga } from '../redux/saga'

const inherncer = window.__REDUX_DEVTOOLS_EXTENSION__ && compose
const sagaMiddleware = createSaga();
// createStore 1 ta callback oladi holos
const store = createStore(
    combineReducers({ counterReducer, userReducer, studentReducer }),
    inherncer(applyMiddleware(sagaMiddleware)),
)

sagaMiddleware.run(userSaga)

export default store;