import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home/Home";
import List from "../screens/List/List";

const MyTabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      //tabBar={(props) => <TabBar {...props} />}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          unmountOnBlur: true,
          /*  tabBarIcon: ({ color, size }) => (
            <GraficIcon color={color} size={size} />
          ), */
        }}
      />
      <Tab.Screen
        name="List"
        component={List}
        options={{
          headerShown: false,
          unmountOnBlur: true,
          /*  tabBarIcon: ({ color, size }) => (
            <GraficIcon color={color} size={size} />
          ), */
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
