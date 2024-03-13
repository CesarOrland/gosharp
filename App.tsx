import { View, Text } from 'react-native'
import React from 'react'
import MainRoutes from './src/routes'
import { Provider } from 'react-redux'
import { store } from './src/redux/store/root.store'

const App = () => {
  return (
    <Provider store={store} >

      <MainRoutes />
    </Provider>
  )
}

export default App
