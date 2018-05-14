/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import bg from './img/bg.png';
import english from './img/english.png';
import hindi from './img/hindi.png';
import manipuri from './img/manipur.png';
import microphone from './img/microphone.png';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <ImageBackground
          source={bg}
          style={{width: '100%', flex: 1, height: '100%'}}
      >
        <View style={styles.container}>
          <Text style={styles.header}>Audio Guide</Text>
          <Image
            style={styles.imageMain}
            source={microphone}
          />

          <Text style={styles.prompt}>Select the language to listen to the naration</Text>
          <TouchableOpacity
            style={styles.buttons}
           onPress={this._onPressButton}>
          <Image
            style={styles.images}
            source={manipuri}
          />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttons}
           onPress={this._onPressButton}>
          <Image
            style={styles.images}
            source={english}
          />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttons}
           onPress={this._onPressButton}>
          <Image
            style={styles.images}
            source={hindi}
          />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 25,
    color:'white',
    fontWeight: '600',
    textAlign: 'center',
    margin: 10,
  },
  prompt: {
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  buttons: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',
    height: 40,
    borderRadius:25,
    marginBottom:20,
  },
  images: {
    width: 60,
    height: 50,
    resizeMode: 'contain'
  },
  imageMain: {
    width: '25%',
    height: '25%',
    resizeMode: 'contain',
    marginBottom: 50,
    marginTop: 40,
  }
});
