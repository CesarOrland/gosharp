import { View, Text } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import { persistor, store } from './src/redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import MainRoutes from './src/routes'

const App = () => {
  return (
    <Provider store={store} >
      <PersistGate persistor={persistor}>
      <MainRoutes />
      </PersistGate>
    </Provider>
  )
}

export default App
