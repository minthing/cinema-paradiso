import AppLoading from 'expo-app-loading';
import React, {useState} from 'react';
import { Text, Image, useColorScheme } from "react-native";
// for preload fonts
import * as Font from "expo-font";
import {MaterialIcons} from '@expo/vector-icons';
import { Asset } from "expo-asset";
//Tab
import { NavigationContainer, DarkTheme, DefaultTheme } from "@react-navigation/native";
import Tabs from "./navigation/Tabs";
import Stack from "./navigation/Stack";
import Root from "./navigation/Root";

// hooks를 사용해서 불러올 수 있음 단, prefetch()를 사용할 수 없음.

  // 폰트를 배열로 불러오는 중
  const loadFonts = (fonts) => fonts.map((font) => Font.loadAsync(font))
  // string일 경우 prefetch() 아닐 경우 require를 사용해야 한다
  const loadImages = (images) =>
  images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.loadAsync(image);
    }
  });

export default function App() {
  const [ready, setReady] = useState(false);
  const onFinish = () => setReady(true);
  const startLoading = async() => {
    const fonts = loadFonts([MaterialIcons.font])
    //local image preload
    // await Asset.loadAsync(require("./minthing.jpeg"));
    // // server image preload
    // await Image.prefetch("https://reactnative.dev/img/oss_logo.png");
    const images = loadImages([
      require("./minthing.jpeg"),
      "https://reactnative.dev/img/oss_logo.png",
    ]);
    await Promise.all([...fonts, ...images]);
    
  };
  const isDark = useColorScheme() === 'dark';
  if(!ready){
    return <AppLoading startAsync={startLoading} onFinish={onFinish} onError={console.error}/>;
  }
  return (
    <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
      <Root />
    </NavigationContainer>
  );
}
