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

import NavigationBar from 'react-native-navbar';
import Forgot from './Forgot';

class Registration extends Component {
  goBack() {
    this.props.navigator.pop();
  }

  linkPage(comp) {
    this.props.navigator.push({
      component: comp
    })
  }
  render() {
    let titleConfig = <View>
                        <Text style={styles.title}>
                          Register
                        </Text>
                      </View>
    let leftConfig = <View>
                      <TouchableHighlight 
                        underlayColor='transparent' 
                        onPress={this.goBack.bind(this)}>
                        <Text style={styles.back}>
                          {'<'}
                        </Text>
                      </TouchableHighlight>
                    </View>   
    return (
      <Image 
        source={require('./reg.png')} 
        style={styles.container} 
        resizeMode='cover' >
        <NavigationBar style={styles.nav} 
          tintColor='transparent'
          title={titleConfig}
          leftButton={leftConfig} />
        <View style={styles.pagetop}>
          <View style={styles.sec1}>
            <Text style={styles.username}>Username</Text>
          </View>
          <View style={styles.sec2}>
            <TextInput style={styles.userinput}
              onChangeText={(text) => this.setState({text})}
              placeholder='user1'
              placeholderTextColor='white'
            />
          </View>
          <View style={styles.sec3}>
            <Text style={styles.email}>
              E-mail
            </Text>
          </View>
          <View style={styles.sec4}>
            <TextInput style={styles.emailinput}
              onChangeText={(text) => this.setState({text})}
              placeholder='me@myemail.com'
              placeholderTextColor='white'
              keyboardType={'email-address'}
            />
          </View>
          <View style={styles.sec5}>
            <Text style={styles.password}>
              Password
            </Text>
          </View>
          <View style={styles.sec6}>
            <TextInput style={styles.pwinput}
              onChangeText={(text) => this.setState({text})}
              placeholder='##########'
              placeholderTextColor='white'
              secureTextEntry={true}
            />
          </View>
          <View style={styles.sec7}>
              <TouchableHighlight>
                <View style={styles.registerbtn}>
                  <Text style={styles.registerbtntxt}>
                    REGISTER
                  </Text>
                </View>
              </TouchableHighlight>
            </View>
        </View>  
        <View style={styles.pagebottom}>
          <TouchableHighlight 
            underlayColor='transparent' 
            onPress={this.linkPage.bind(this, Forgot)}>
              <Text style={styles.reset}>
                RESET PASSWORD
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
      height: null,
      width: null,
    },

    pagetop: {
      flex: 10,
    },

    pagebottom: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    title: {
      fontSize: 22,
      backgroundColor: 'transparent',
      color: 'white',
    },

    back: {
      fontSize: 24,
      paddingLeft: 15,
      paddingTop: 8,
      paddingRight: 5,
      backgroundColor: 'transparent',
      color: 'white',
    },

    username: {
        color: 'white',
        marginLeft: 20,
        marginTop: 25,
    },

    userinput: {
      height: 60,
      width: 300,
      color: 'white',
    },

    email: {
      color: 'white',
      marginLeft: 20,
      marginTop: 15,
    },

    emailinput: {
      height: 60,
      width: 300,
      color: 'white',   
    },

    password: {
      color: 'white',
      marginLeft: 20,
      marginTop: 15,      
    },

    pwinput: {
      height: 60,
      width: 300,
      color: 'white',
    },

    registerbtn: {
      alignItems: 'center',
      justifyContent: 'center',
    },

    registerbtntxt: {
      color: 'white',
      paddingRight: 136,
      paddingLeft: 136,
      paddingTop: 10,
      paddingBottom: 10,
      backgroundColor: '#4dffc3',
    },

    reset: {
      color: 'white',
    },

    sec1: {

    },

    sec2: {
      borderBottomColor: 'white',
      borderBottomWidth: 1,
      marginLeft: 20,
      marginRight: 20,      
    },

    sec3: {

    },

    sec4: {
      borderBottomColor: 'white',
      borderBottomWidth: 1,
      marginLeft: 20,
      marginRight: 20,     
    },

    sec5: {

    },

    sec6: {
      borderBottomColor: 'white',
      borderBottomWidth: 1,
      marginLeft: 20,
      marginRight: 20, 
    },

    sec7: {
      marginTop: 30,
      
    },
});

module.exports = Registration;
