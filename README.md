# CINAMA PARADISO

### APPLOADING
`AppLoading`은 세 가지의 props를 가진다. (현재는 업데이트 되어서 deprecated 됨)
- startAsync : 로딩이 완료되고 나서부터 시작되는 화면 (`await/async`와 함께 사용해야 함)
- onFinish : `startAsync` 가 완료되고 나서의 행동
- onError

```javascript
export default function App() {
  const [ready, setReady] = useState(false);
  const onFinish = () => setReady(true);
  const startLoading = async() => {
    await new Promise(resolve => setTimeout(resolve, 1000))
  };
  if(!ready){
    return <AppLoading startAsync={startLoading} onFinish={onFinish} onError={console.error}/>;
  }
  return <Text>We are done loading!</Text>;
}

```

### react natigation
docs : https://reactnavigation.org/

```javascript
const Tab = createBottomTabNavigator();
```

- `screenOptions`와 `option`을 통해 tab을 꾸밀 수 있다.

```javascript
    screenOptions={{
      tabBarStyle: { backgroundColor: "tomato" },
      tabBarActiveTintColor: "red",
      tabBarInactiveTintColor: "purple",
      headerTitleStyle: { color: "tomato" },
      headerRight: () => (
        <View>
          <Text>Hello</Text>
        </View>
      ),
    }}
```

### useColorScheme
- 현재 화면이 라이트모드인지 다크모드인지 알려준다.
- `shift+commend+a`를 통해 시뮬레이터 모드를 바꿀 수 있다.
- 이슈기록 : tab이 먼저 실행됨 이슈
```javascript
const Tab = () => (
  // 이 경우 정상실행
)

const Tab = () => {
  // 이 경우 정상실행
  return ()
}

const Tab = () => {
  // 이 경우 정상 실행 안함
}

```

- color picker:https://flatuicolors.com/palette/ru

### native stack navigation
https://reactnavigation.org/docs/native-stack-navigator

stack navigation 보다 좀 더 빠르다.
`navigate`를 사용하여 다른 페이지로 갈 수 있게 만들어줌.

```javascript
const ScreenOne = ({ navigation: { navigate } }) => (
  <TouchableOpacity onPress={() => navigate("Two")}>
    <Text>go to two</Text>
  </TouchableOpacity>
```

* `goBack()` 시용법
```javascript
const ScreenThree = ({ navigation: { goBack } }) => (
  <TouchableOpacity onPress={() => goBack()}>
    <Text>Three</Text>
  </TouchableOpacity>
```
* `setOptions()` 시용법
```javascript
const ScreenThree = ({ navigation: { setOptions } }) => (
  <TouchableOpacity onPress={() => setOptions({ title: "Hello!" })}>
    <Text>Change title</Text>
  </TouchableOpacity>
```

### 220207
theme : https://styled-components.com/docs/api#themeconsumer

##### swiper
https://github.com/leecade/react-native-swiper