import {createStore, applyMiddleware} from 'redux'
import rootReducer from '../reducers/rootReducer'
import createSagaMiddleware from "@redux-saga/core"
import rootSaga from '../sagas/rootSaga'
import {composeWithDevTools} from 'redux-devtools-extension'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
)
sagaMiddleware.run(rootSaga)

export default store