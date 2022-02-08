import { createStore } from 'redux'
import rootReducer from './reducers/history'

export const store = createStore(rootReducer)
