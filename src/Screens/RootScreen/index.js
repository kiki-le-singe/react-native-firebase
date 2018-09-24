import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';
import { withNavigation } from 'react-navigation';

import * as userActions from '../../redux/actions/userActions';
import Loader from '../../components/Loader';

export class RootScreen extends PureComponent {
  constructor() {
    super();

    this.unsubscriber = null;
  }

  /**
   * Listen for any auth state changes and update component state
   */
  componentDidMount() {
    const { navigation, setUser } = this.props;

    // @TODO: Watch this because doesn't seems to work...
    this.unsubscriber = firebase.auth().onAuthStateChanged((user) => {
      alert('User updated');

      setUser(user);
    });

    navigation.replace('Home');
  }

  componentWillUnmount() {
    if (this.unsubscriber) {
      this.unsubscriber();
    }
  }

  render() {
    return (
      <Loader loading />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setUser: data => dispatch(userActions.setUser(data)),
});

export default withNavigation(connect(null, mapDispatchToProps)(RootScreen));
