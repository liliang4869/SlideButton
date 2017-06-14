/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import SlideButton from './src/SlideButton'
var {height,width}=Dimensions.get('window');
export default class SlideButtonPro extends Component {
  render() {
    return (
      <View style={styles.container}>
      <SlideButton 
      exView={<TouchableOpacity style={{width:width*0.05,height:height*0.06,backgroundColor:'#44ee63',borderRadius:5}} />}
      >
        <View style={{backgroundColor:'#ff8888',width:width,height:height*0.1,alignItems:'center',justifyContent:'center'}}>
          <TouchableOpacity style={{width:width*0.5,height:height*0.06,backgroundColor:'#80ee63',borderRadius:5}} />
        </View>
      </SlideButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('SlideButtonPro', () => SlideButtonPro);
