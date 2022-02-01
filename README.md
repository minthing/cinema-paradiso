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