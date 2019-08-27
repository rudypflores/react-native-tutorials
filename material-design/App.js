import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ColorScreen from './src/screens/ColorScreen';
import CardScreen from './src/screens/CardScreen';


//disable yellow box of warning
console.disableYellowBox = true;

//Create navigation object
const navigator = createStackNavigator({
  Home: HomeScreen,
  Color: {
    screen: ColorScreen,
    navigationOptions: {
      title: 'Color Screen'
    }
  },
  Card: {
    screen:CardScreen,
    navigationOptions: {
      title: 'Card Screen'
    }
  }
}, {
  initialRouteName:'Home',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor:'#1565C0',
    },
    headerTintColor:'white',
    title:'Material Design Sample'
  }
});

//Wrapper for application
export default createAppContainer(navigator);