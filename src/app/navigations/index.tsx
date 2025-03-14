import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeNavigator } from "./MainNavigator";

const RootStack = createNativeStackNavigator({
  screenOptions: {
    headerShown: false,
    contentStyle: {
      backgroundColor: "#fff",
    },
  },

  groups: {
    PrivateGroup: {
      screens: {
        HomeStack: HomeNavigator,
      },
    },
  },
});

export const Navigation = createStaticNavigation(RootStack);
