import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./Tabs";
import Stack from "./Stack";

const Navigation = createNativeStackNavigator();

const Root = () => <Navigation.Navigator screenOptions={{headerShown:false}}>
  <Navigation.Screen name="Tabs" component={Tabs}></Navigation.Screen>
  <Navigation.Screen name="Stack" component={Stack}></Navigation.Screen>
</Navigation.Navigator>

export default Root;