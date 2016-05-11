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

class Forgot extends Component {
  goBack() {
    this.props.navigator.pop();
  }  
  render() {
      let titleConfig = <View>
                          <Text style={styles.reset}>
                            Reset Account
                          </Text>
                        </View>
      let leftConfig = <View>
                        <TouchableHighlight
                          underlayColor='transparent' 
                          onPress={this.goBack.bind(this)} >
                            <Text style={styles.back}>
                              {'<'}
                            </Text>
                        </TouchableHighlight>
                      </View>   
    return (
      <Image 
        source={require('./dash.png')} 
        style={styles.container} 
        resizeMode='cover' >
        <NavigationBar style={styles.nav} 
          tintColor='transparent'
          title={titleConfig}
          leftButton={leftConfig} />
        <View style={styles.page}>    
          <View  style={styles.sec1}>    
            <Text style={styles.email}>
              E-mail
            </Text>
          </View >
          <View style={styles.sec2}>
            <View style={{borderBottomColor: 'white', borderBottomWidth: 1,}}>
              <TextInput style={styles.emailbox}
                onChangeText={(text) => this.setState({text})}
                keyboardType={'email-address'}
                placeholder='Me@mail.com'
                placeholderTextColor='white' />
            </View> 
          </View>
          <View style={styles.sec3}>
            <TouchableHighlight>
              <View style={styles.resetbtn}>
                <Text style={styles.resetbtntxt}>
                  RESET
                </Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.sec4}>
            <Text style={styles.resetinst}>
              Reset instructions will be emailed to you
            </Text>
          </View>  
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

  page: {
    
  },

  email: {
    color: 'white',
    marginLeft: 20,
    marginTop: 25,
  },

  reset: {
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

  emailbox: {  
    color: 'white',
    height: 60,
    width: 300,
    marginLeft: 20,
  },

  resetbtn: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  resetbtntxt: {
    color: 'white',
    paddingRight: 147,
    paddingLeft: 147,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#4dffc3',
  },

  sec1: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  sec2: {
      marginTop: 10,
      marginLeft: 20,
      marginRight: 20,
  },
    

  sec3: {
      marginTop: 20,


  },

  sec4: {
    alignItems: 'center',
    marginTop: 20,
    
  },

  resetinst: {
    color: 'white',

  },

});

module.exports = Forgot;
