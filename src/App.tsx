import { createAppContainer, createStackNavigator } from "react-navigation";
import { Colors } from "./res/Colors";
import { MainScreen } from "./screens/MainScreen";
import { AddScreen } from "./screens/AddScreen";

const AppNavigator = createStackNavigator({
  MainScreen: {
    screen: MainScreen,
  },
  AddScreen: {
    screen: AddScreen,
  },
},
  {
    initialRouteName: "MainScreen",
    defaultNavigationOptions: {
      headerTitleStyle: {
        fontSize: 20,
        color: Colors.text,
      },
      headerStyle: {
        backgroundColor: Colors.primary,
      },
      headerTintColor: Colors.text,
    },
  });

export default createAppContainer(AppNavigator);
