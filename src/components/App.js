import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator, } from 'react-navigation';
import Home from './Home';
import Activity from './Activity';
const kangla = StackNavigator({
  Home: { screen: Home },
  Activity: { screen: Activity }
},
{headerMode: 'none'}
);

export default kangla;
