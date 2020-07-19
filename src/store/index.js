import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from "redux-thunk";
import {repositoryReducer} from './reducers/repository'

const rootReducer = combineReducers({
    repository: repositoryReducer,
})

export default createStore(rootReducer, applyMiddleware(thunk))
