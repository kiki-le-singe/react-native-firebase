import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../Screens/HomeScreen';
import AuthenticationScreen from '../Screens/AuthenticationScreen';

export default createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Authentication: {
    screen: AuthenticationScreen,
  },
});
