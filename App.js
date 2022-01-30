import AppLoading from 'expo-app-loading';
import React, {useState} from 'react';
import { Text, Image } from "react-native";
// for preload fonts
import * as Font from "expo-font";
import {MaterialIcons} from '@expo/vector-icons';
import { Asset } from "expo-asset";


export default function App() {
  const [ready, setReady] = useState(false);
  const onFinish = () => setReady(true);
  const startLoading = async() => {
    await Font.loadAsync(MaterialIcons.font)
    //local image preload
    await Asset.loadAsync(require("./minthing.jpeg"));
    // server image preload
    await Image.prefetch("https://reactnative.dev/img/oss_logo.png");
    
  };
  if(!ready){
    return <AppLoading startAsync={startLoading} onFinish={onFinish} onError={console.error}/>;
  }
  return <Text>We are done loading!</Text>;
}
