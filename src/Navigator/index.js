import { createStackNavigator } from 'react-navigation';

import RootScreen from '../Screens/RootScreen';
import HomeScreen from '../Screens/HomeScreen';
import AuthenticationScreen from '../Screens/AuthenticationScreen';

export default createStackNavigator({
  Root: {
    screen: RootScreen,
  },
  Home: {
    screen: HomeScreen,
  },
  Authentication: {
    screen: AuthenticationScreen,
  },
});
