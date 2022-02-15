import React, { useEffect, useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import Swiper from "react-native-web-swiper";
// width 랑 height 넘겨줌
import { Dimensions } from "react-native";
// styled-component는 브라우저에서도 동작하기 때문에 구분해 줘야함
import styled from "styled-components/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ActivityIndicator } from "react-native";

const Button = styled.TouchableOpacity`
flex: 1;
justify-content: center;
align-items: center;
background-color: ${(props) => props.theme.mainBgColor};
`;

const Title = styled.Text`
color: ${(props) => props.theme.textColor};
`

const Container=styled.ScrollView`
background-color:${(props) => props.theme.mainBgColor};
`

const View = styled.View`
flex:1;
`

const API_KEY = `53e3cacc0a42af8f2e952a4333712cfe`;
const {height, width} = Dimensions.get("window");


const LoaderView = styled.View`
flex:1;
justify-content:center;
align-items:center;
`

const Movie: React.FC<NativeStackScreenProps<any, "Movies">> = () => {
  const [loading, setLoading] = useState(true);
  const getNowPlaying = () => {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=ko-KR&page=1&region=KR`)
  };
return loading ? <LoaderView><ActivityIndicator/></LoaderView> : 
  (<Container>
    <Swiper controlsEnabled={false} loop timeout={5} containerStyle={{width:"100%", height:height/4}}>
      <View style={{backgroundColor:"#f7d794"}}></View>
      <View style={{backgroundColor:"#f3a683"}}></View>
      <View style={{backgroundColor:"#778beb"}}></View>
      <View style={{backgroundColor:"#e77f67"}}></View>
      <View style={{backgroundColor:"#cf6a87"}}></View>
    </Swiper>
  </Container>
)
}


export default Movie;