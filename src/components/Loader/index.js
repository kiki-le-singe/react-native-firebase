import React, { PureComponent } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default class Loader extends PureComponent {
  render() {
    const { loading } = this.props;

    return loading ? (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    ) : null;
  }
}

Loader.propTypes = {
  loading: PropTypes.bool,
};

Loader.defaultProps = {
  loading: false,
};
