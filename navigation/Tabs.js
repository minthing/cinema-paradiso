import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movie from "../screens/Movie";
import Drama from "../screens/Drama";
import Search from "../screens/Search";
import { Text, View } from "react-native";
import { useColorScheme } from 'react-native';
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { darkGrey, darkInitial, darkTint, lightGrey, lightTint } from "../colors";
import { MaterialIcons, Feather } from '@expo/vector-icons';
import Stack from "./Stack";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const isDark = useColorScheme() === 'dark';
  return(
    <Tab.Navigator
    // 원래 있는 요소임
    sceneContainerStyle={{
      backgroundColor: isDark ? darkInitial : "white",
    }}
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
        tabBarLabelStyle: { marginTop: -5, fontSize: 11, fontWeight: "600",
        },
    }}>
      <Tab.Screen name="Movie" component={Movie} options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="confirmation-number" color={color} size={size} />
        )
        }} />
      <Tab.Screen name="Drama" component={Drama} options={{
        tabBarIcon: ({ color, size }) => (
          <Feather name="tv" color={color} size={size} />
        )
      }} />
      <Tab.Screen name="Search" component={Search} options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="search" color={color} size={size} />
        )
      }}/>
    </Tab.Navigator>

  )
};

export default Tabs;