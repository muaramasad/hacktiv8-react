import {createStore, applyMiddleware, compose} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'


import myReducer from './reducers'

const store = createStore(
   myReducer,
   compose(
      applyMiddleware(logger,thunk)
   )
)

export default store