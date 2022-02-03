import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movie from "../screens/Movie";
import Drama from "../screens/Drama";
import Search from "../screens/Search";
import { Text, View } from "react-native";
import { useColorScheme } from 'react-native';
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { darkGrey, darkInitial, darkTint, lightGrey, lightTint } from "../colors";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const isDark = useColorScheme() === 'dark';
  return(
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: isDark ? darkInitial : "white",
        },
        tabBarActiveTintColor: isDark ? darkTint : lightTint,
        tabBarInactiveTintColor: isDark ? darkGrey : lightGrey,
        headerStyle: {
          backgroundColor: isDark ? darkInitial : "white",
        },
        headerTitleStyle: {
          color: isDark ? "white" : darkInitial,
        },
    }}>
      <Tab.Screen name="Movie" component={Movie} />
      <Tab.Screen name="Drama" component={Drama} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>

  )
};

export default Tabs;