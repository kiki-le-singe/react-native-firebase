import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import firebase from 'react-native-firebase';

import Login from '../../components/Login';

export default class AuthenticationScreen extends PureComponent {
  constructor() {
    super();

    this.unsubscriber = null;
    this.state = {
      user: null,
    };
  }

  /**
   * Listen for any auth state changes and update component state
   */
  componentDidMount() {
    this.unsubscriber = firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user });
    });
  }

  componentWillUnmount() {
    if (this.unsubscriber) {
      this.unsubscriber();
    }
  }

  _onPressSignIn = (email, password) => {
    firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, password)
      .then((data) => {
        const { user } = data;

        // this.setState({
        //   isAuthenticated: true,
        // });

        alert(`isAuthenticated: ${user.email}`);
      })
      .catch((error) => {
        const { userInfo } = error;

        alert(`${userInfo.NSLocalizedDescription}`);

        this.setState({
          isAuthenticated: false,
        });
      });
  }

  render() {
    const { user } = this.state;

    // console.log('languageCode', firebase.auth().languageCode);
    // console.log('currentUser', firebase.auth().currentUser);

    // If the user has not authenticated
    if (!user) {
      return <Login onPressSignIn={this._onPressSignIn} />;
    }

    return (
      <View>
        <Text>Welcome to my awesome app {user.email}!</Text>
      </View>
    );
  }
}
