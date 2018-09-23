/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react';
import {
  Platform, StyleSheet, Text, View, Button,
} from 'react-native';
import firebase from 'react-native-firebase';
import { connect } from 'react-redux';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export class HomeScreen extends PureComponent<Props> {
  render() {
    const { user } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>

        {user.connected ? <Text>connected</Text> : <Text>not connected</Text>}
        {firebase.auth.nativeModuleExists && <Text>auth()</Text>}
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Authentication')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps)(HomeScreen);
