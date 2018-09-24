import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import firebase from 'react-native-firebase';
import { connect } from 'react-redux';

import * as userActions from '../../redux/actions/userActions';
import Login from '../../components/Login';
import Loader from '../../components/Loader';

export class AuthenticationScreen extends PureComponent {
  _onPressSignIn = (email, password) => {
    const { signInUserRequest, signInUserSuccess, signInUserError } = this.props;

    signInUserRequest();

    firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, password)
      .then((data) => {
        const { user } = data;

        signInUserSuccess(user);

        alert(`isAuthenticated: ${user.email}`);
      })
      .catch((error) => {
        const { userInfo } = error;

        signInUserError();

        alert(`${userInfo.NSLocalizedDescription}`);
      });
  }

  render() {
    const { user } = this.props;

    // console.log('languageCode', firebase.auth().languageCode);
    // console.log('currentUser', firebase.auth().currentUser);

    if (user.loading) {
      return <Loader loading />;
    }

    // If the user has not authenticated
    if (!user.connected) {
      return <Login onPressSignIn={this._onPressSignIn} />;
    }

    return (
      <View>
        <Text>Welcome to my awesome app {user.email}!</Text>
        <Text>@TODO logout</Text>
      </View>
    );
  }
}

AuthenticationScreen.propTypes = {
  signInUserRequest: PropTypes.func.isRequired,
  signInUserSuccess: PropTypes.func.isRequired,
  signInUserError: PropTypes.func.isRequired,
  user: PropTypes.shape({
    connected: false,
  }).isRequired,
};

const mapStateToProps = ({ user }) => ({
  user,
});

const mapDispatchToProps = dispatch => ({
  signInUserRequest: () => dispatch(userActions.signInUserRequest()),
  signInUserSuccess: data => dispatch(userActions.signInUserSuccess(data)),
  signInUserError: () => dispatch(userActions.signInUserSuccess()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticationScreen);
