import React from "react";
import { TouchableOpacity, Text } from "react-native";
// styled-component는 브라우저에서도 동작하기 때문에 구분해 줘야함
import styled from "styled-components/native";

const Button = styled.TouchableOpacity`
flex: 1;
justify-content: center;
align-items: center;
background-color:tan;
`;

const Title = styled.Text`
color:${props => props.selected? "blue":"red"}
`

const Movie = ({navigation : {navigate}}) => (
  <Button onPress={() => navigate("Stack", {screen:"Three"})}
  style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Title selected={true}>Movie</Title>
  </Button>
);
export default Movie;