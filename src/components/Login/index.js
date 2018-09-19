import React, { PureComponent } from 'react';
import { TextInput, View, Button } from 'react-native';
import PropTypes from 'prop-types';

export default class Login extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      password: null,
    };
  }

  _handleEmail = (email) => {
    this.setState({ email });
  }

  _handlePassword = (password) => {
    this.setState({ password });
  }

  _handlePressSignIn = () => {
    const { email, password } = this.state;
    const { onPressSignIn } = this.props;

    if (!email || !password) {
      return alert('Veuillez saisir un email et password');
    }

    return onPressSignIn(email, password);
  }

  render() {
    const { email, password } = this.state;

    return (
      <View>
        <TextInput
          style={{width: '80%', height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={this._handleEmail}
          value={email}
          placeholder="Email"
        />
        <TextInput
          style={{width: '80%', height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={this._handlePassword}
          value={password}
          placeholder="Password"
        />
        <Button
          onPress={this._handlePressSignIn}
          title="Sign In"
        />
      </View>
    );
  }
}

Login.propTypes = {
  onPressSignIn: PropTypes.func.isRequired,
};
