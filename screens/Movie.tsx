import React from "react";
import { TouchableOpacity, Text } from "react-native";
// styled-component는 브라우저에서도 동작하기 때문에 구분해 줘야함
import styled from "styled-components/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

const Button = styled.TouchableOpacity`
flex: 1;
justify-content: center;
align-items: center;
background-color: ${(props) => props.theme.mainBgColor};
`;

const Title = styled.Text`
color: ${(props) => props.theme.textColor};
`

const Movie: React.FC<NativeStackScreenProps<any, "Movies">> = () => null;

export default Movie;