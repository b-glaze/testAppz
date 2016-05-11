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

import Registration from './Registration';
import Forgot from './Forgot';
import Browse from './Browse';

class Login extends Component {

  linkPage(comp) {
    this.props.navigator.push({
      component: comp
    })
  }

  logUser(){
    this.props.navigator.immediatelyResetRouteStack([{component: Browse}]);
  }

  render() {
    return (
      <Image source={require('./reg.png')} 
        resizeMode='cover' 
        style={styles.container} >
        <StatusBar barStyle='light-content' />
        <View style={styles.sec1}>
          <Image 
            source={require('./logogreen.png')} 
            resizeMode='contain' style={styles.logoimg} />
          <Text style={styles.title}>
            BYOP
          </Text>
        </View>
        <View style={styles.sec2}>
          <View style={{borderBottomColor: 'white', borderBottomWidth: 1,}}>
            <TextInput style={styles.email}
              onChangeText={(text) => this.setState({text})}
              keyboardType={'email-address'}
              placeholder='Me@mail.com'
              placeholderTextColor='white'
              autoCorrect={false} />
          </View>  
        </View>
        <View style={styles.sec3}>
          <View style={{borderBottomColor: 'white', borderBottomWidth: 1,}}>
            <TextInput style={styles.password}
              onChangeText={(text) => this.setState({text})}
              placeholder='**********'
              placeholderTextColor='white' 
              secureTextEntry={true} />
          </View>  
        </View>
        <View style={styles.sec4}>
          <TouchableHighlight 
            underlayColor='transparent' 
            onPress={this.linkPage.bind(this, Forgot)} >
              <Text style={styles.forgot}>
                forgot password?
              </Text>
          </TouchableHighlight>
        </View> 
        <View style={styles.sec5}>
          <TouchableHighlight
            onPress={this.logUser.bind(this, Browse)} > 
            <View style={styles.loginbox}>
              <Text style={styles.logintext}>
                Login
              </Text>
            </View>
          </TouchableHighlight>
        </View>    
        <View style={styles.sec6}>
          <TouchableHighlight 
            onPress={this.linkPage.bind(this, Registration)} >
              <Text style={styles.signup}>
                sign up
              </Text>
          </TouchableHighlight>
        </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: null,
    width: null,
  },
  sec1: {
    flex: 1.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoimg: {
    height: 120,
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'transparent',
    fontFamily: 'Arial',
    justifyContent: 'center',
  },
  sec2: {
    flex: .5,
  },
  email: {  
    color: 'white',
    height: 60,
    width: 300,
    marginLeft: 20,
  },
  sec3: {
    flex: .5,
  },
  password: {
    color: 'white',
    height: 60,
    width: 300,
    marginLeft: 20,
  },
  sec4:{
    flex: .4,
  },
  forgot: {
    color: 'white',
    backgroundColor: 'transparent',
    fontWeight: 'bold',
  },
  sec5: {
    flex: 1,
  },
  loginbox: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 100,
    paddingLeft: 100,
    backgroundColor: '#4dffc3',
  },
  logintext: {
    fontWeight: 'bold',
  },
  sec6: {
    flex: .35,
  },
  signup: {
    color: 'white',
    backgroundColor: 'transparent',
    fontWeight: 'bold',
  },
});

module.exports = Login;
