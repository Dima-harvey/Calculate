import { createStore, compose } from 'redux'
import history from './reducers/history'

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

export const store = createStore(
  history,
  composeEnhancers(),
)

