import { View, Text } from 'react-native'
import React from 'react'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import Navigation from './Navigation'
import { COLORS } from '../utils/Colors'

const MainRoutes = () => {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: COLORS.BACKGROUND
    },
  };

  return (
    <NavigationContainer theme={MyTheme} >
        <Navigation />
    </NavigationContainer>
  )
}

export default MainRoutes