import React, {
  Alert,
  AppRegistry,
  DatePickerIOS,
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
import DrawerLayout from 'react-native-drawer-layout'; 

class Browse extends Component {

  _openDrawer(){
    this.refs['DRAWER'].openDrawer();
  }
  
  render () {
    let titleConfig = <View>
                        <Text style={styles.title}>
                          BYOP
                        </Text>
                      </View>
    let leftConfig = <View>
                      <TouchableHighlight 
                        underlayColor='transparent'
                        onPress={this._openDrawer.bind(this)}>
                          <Text style={styles.left}>
                            {'|||'}
                          </Text>
                      </TouchableHighlight>
                    </View>   
    let navigationView = <View style={styles.slide}>
                          <View style={styles.block1}>
                            <TouchableHighlight 
                              underlayColor='transparent'
                              onPress={() => Alert.alert(
                                'Hello',
                                'Ready?'                                
                              )} >
                              <View style={styles.button}>
                                <Text>Alert with message and default button</Text>
                              </View>
                              </TouchableHighlight>
                          </View>
                          <Image 
                            source={require('./dash.png')} 
                            style={styles.block2} 
                            resizeMode='cover' >
                            <Text style={styles.block2text}>hello</Text>
                          </Image>
                          <View style={styles.block3}>
                            <Text>hello</Text>
                          </View>
                          <View style={styles.block4}>
                            <Text>hello</Text>
                          </View>
                        </View>
    return (
      <DrawerLayout
        drawerWidth={200}
        renderNavigationView={() => navigationView}
        drawerPosition={DrawerLayout.positions.Left}
        ref={'DRAWER'}
        drawerBackgroundColor='rgba(0,0,0,0.5)'>
        <Image 
          source={require('./dash.png')} 
          style={styles.container} 
          resizeMode='cover' >
          <NavigationBar style={styles.nav} 
              tintColor='transparent'
              title={titleConfig}
              leftButton={leftConfig} />
          <View style={styles.page}>
            <Text style={styles.words}>
              Browse
            </Text>
          </View>
        </Image>
      </DrawerLayout>
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  words: {
    color: 'white',
    fontSize: 30,
  },

  title: {
    color: 'white',
    fontSize: 20,
  },

  left: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 20,
  },

  slide: {
    flex: 1,
    backgroundColor: 'white',
    height: 200,
    justifyContent: 'center',
    alignItems:'center',
  },

  navtext: {
    justifyContent: 'center',
    alignItems:'center',
  },

  block1: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
  },

  block2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
  },

  block2text: {
    backgroundColor: 'transparent',
    color: 'white',
  },

  block3: {
    flex: 1,
    backgroundColor: 'yellow', 
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
  },

  block4: {
    flex: 1,
    backgroundColor: 'pink', 
    justifyContent: 'center',
    alignItems: 'center', 
    width: 200,  
  },

  button: {
    padding: 10,
  },

});

module.exports = Browse;