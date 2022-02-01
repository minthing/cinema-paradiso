import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movie from "../screens/Movie";
import Drama from "../screens/Drama";
import Search from "../screens/Search";

const Tab = createBottomTabNavigator();

const Tabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Movie" component={Movie} />
    <Tab.Screen name="Drama" component={Drama} />
    <Tab.Screen name="Search" component={Search} />
  </Tab.Navigator>
);

export default Tabs;