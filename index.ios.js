import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  StatusBar,
  Navigator
} from 'react-native';

import Login from './Login'

function renderScene(route, navigator){
  return <route.component route={route} navigator={navigator} />;
}
class testAppz extends Component {
  render() {
    const initialRoute = {
      component: Login
    }
    return (
      <View style={styles.container}>
        <Navigator
          initialRoute={initialRoute}
          renderScene={renderScene} />

      </View>    
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },  
});

AppRegistry.registerComponent('testAppz', () => testAppz);
