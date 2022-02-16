import React, { useEffect, useState } from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import Swiper from 'react-native-swiper';
// Dimension width 랑 height 넘겨줌
// styled-component는 브라우저에서도 동작하기 때문에 구분해 줘야함
import styled from "styled-components/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ActivityIndicator, Dimensions, StyleSheet } from "react-native";
import { makeImagePath } from "../utilits";
import { BlurView } from "@react-native-community/blur";
import { useColorScheme } from 'react-native';

const Button = styled.TouchableOpacity`
flex: 1;
justify-content: center;
align-items: center;
background-color: ${(props) => props.theme.mainBgColor};
`;

const Title = styled.Text`
font-size: 16px;
color:white;
font-weight:600;
`


const Container=styled.ScrollView`
background-color:${(props) => props.theme.mainBgColor};
`

const Poster = styled.Image`
width:100px;
height:160px;
border-radius:5px;
`

const View = styled.View`
flex:1;
`

const Overview = styled.Text`
color:#ddd;
margin-top:5px;
`
const Votes = styled(Overview)`
font-size:12px;
`


const BgImg = styled.Image``;

const API_KEY = `53e3cacc0a42af8f2e952a4333712cfe`;
const {height, width} = Dimensions.get("window");

const Wrapper = styled.View`
flex-direction:row;
justify-content:center;
align-items:center;
height:100%;
`

const Column = styled.View`
width:60%;
height:130px;
margin-left:20px;`


const LoaderView = styled.View`
flex:1;
justify-content:center;
align-items:center;
`

const Movie: React.FC<NativeStackScreenProps<any, "Movies">> = () => {
  const isDark = useColorScheme() === 'dark';
  const [loading, setLoading] = useState(true);
  const [nowplayingMovies, setNowplayingMovies] = useState([])
  const getNowPlaying = async () => {
  const {results} = await (await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=ko-KR&page=1&region=KR`)).json();
  // 패치해줘야 되는구나... 몰랐네...
  setNowplayingMovies(results);
  setLoading(false);
  };

  useEffect(() => {
    getNowPlaying();
  }, [])
return loading ? <LoaderView><ActivityIndicator /></LoaderView> : 
  (<Container>
    <Swiper showsButtons={false} showsPagination={false} loop autoplay autoplayTimeout={5} containerStyle={{width:"100%", height:height/4}}>
      {nowplayingMovies.map((movie) => (
          <View key={movie.id}>
            <Image style={StyleSheet.absoluteFill} source={{ uri: makeImagePath(movie.backdrop_path) }} />
            <BlurView intensity={80} tint={isDark?"dark" : "light"} style={StyleSheet.absoluteFill} >
              <Wrapper>
                <Poster source={{ uri: makeImagePath(movie.poster_path) }} />
                <Column>
                  <Title>{movie.title}</Title>
                  <Overview>{movie.overview.slice(0, 100)}{movie.overview.length >= 100 ? "..." : ""}</Overview>
                  <Votes>★{movie.vote_average}/10</Votes>
                </Column>
              </Wrapper>
            </BlurView>
          </View>
      ))}
    </Swiper>
  </Container>
)
}


export default Movie;