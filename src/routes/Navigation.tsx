import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from '../screens/Login/Start';
import MyTabs from './MyTabs';

const Navigation = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
    <Stack.Screen
      name="Start"
      component={Start}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="MyTabs"
      component={MyTabs}
      options={{headerShown: false}}
    />
  </Stack.Navigator>

  )
}

export default Navigation