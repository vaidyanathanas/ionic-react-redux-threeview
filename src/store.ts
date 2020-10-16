import { applyMiddleware, createStore } from 'redux'
import reducer from './redux/reducer';
export const configureStore= ()=> {

  const store = createStore(reducer, {})

  return store
}