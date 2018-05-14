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
import { StackNavigator, NavigationActions } from 'react-navigation';
import bg from '../../img/bg.png';
import play from '../../img/play.png';
import pause from '../../img/pause.png';
import stop from '../../img/stop.png';
import countdown from '../../img/countdown.png';
import Home from './Home';

type Props = {};
export default class Activity extends Component<Props> {
  constructor(props) {
        super(props);
        const {state} = this.props.navigation;
        var Lang = state.params ? state.params.Lang : "<undefined>";
        this.state = {
          play: 0,
          imgplay: play,
          playtxt: "Tap to Play."
        }
      }

      back() {
        this.props.navigation.navigate('Home');
      }

      playpause(){
        if(this.state.play == 1){
          this.setState({play: 0});
          this.setState({imgplay: play});
          this.setState({playtxt: "Tap to Play"});
        }
        if(this.state.play == 0){
          this.setState({play: 1});
          this.setState({imgplay: pause});
          this.setState({playtxt: "Tap to Pause"});
        }
      }
  render() {
    return (
      <ImageBackground
          source={bg}
          style={{width: '100%', flex: 1, height: '100%'}}
      >
        <View style={styles.container}>
          <Text style={styles.header}>Audio Guide</Text>
          <TouchableOpacity
          style={styles.playpause}
           onPress={() => this.playpause()}>
                <Image
                style={styles.imageMain}
                  source={this.state.imgplay}
                />
          </TouchableOpacity>

          <Text style={styles.prompt}>{this.state.playtxt}</Text>

          <TouchableOpacity
            style={styles.buttons}
           onPress={() => this.back()}>
           <Text>BACK</Text>
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
  playpause:{
    width: '60%',
    height: '60%',
  },
  imageMain: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    marginBottom: 20,
    marginTop: 40,
  }
});
