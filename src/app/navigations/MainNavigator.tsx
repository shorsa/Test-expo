import { Updates } from "@app/screens/MainScreens/Updates";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "@app/screens/MainScreens/Home";

const HomeNavigator = createBottomTabNavigator({
  initialRouteName: "HomeScreen",
  screens: {
    HomeScreen: {
      screen: Home,
      options: {
        title: "Feed",
      },
    },
    UpdatesScreen: {
      screen: Updates,
      options: {},
    },
  },
});

export { HomeNavigator };
