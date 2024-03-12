import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'

import appReducer from './reducer/reducers'

const middleware: any = [thunk];

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  }
  const persistedReducer = persistReducer(persistConfig, appReducer )

  function logger({ getState } : any) {
    return (next: any) => (action: any) => {
      console.log('will dispatch', action)
  
      // Call the next dispatch method in the middleware chain.
      const returnValue = next(action)
  
      console.log('state after dispatch', getState())
  
      // This will likely be the action itself, unless
      // a middleware further in chain changed it.
      return returnValue
    }
  }

  export const store = createStore(persistedReducer)
  export const persistor = persistStore(store)