import AnimatedSplashScreen from "@components/SplashScreen";
import { useFonts } from "expo-font";
import React, { PropsWithChildren } from "react";
import { View } from "react-native";

interface Props extends PropsWithChildren {
  isReady: boolean;
}

const AppLayout: React.FC<Props> = ({ children, isReady }) => {
  const [isSplashScreenVisible, setIsSplashScreenVisible] =
    React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-Black": require("@assets/fonts/Inter-Black.otf"),
    "Inter-Bold": require("@assets/fonts/Inter-Bold.otf"),
    "Inter-ExtraBold": require("@assets/fonts/Inter-ExtraBold.otf"),
    "Inter-ExtraLight": require("@assets/fonts/Inter-ExtraLight.otf"),
    "Inter-Light": require("@assets/fonts/Inter-Light.otf"),
    "Inter-Medium": require("@assets/fonts/Inter-Medium.otf"),
    "Inter-Regular": require("@assets/fonts/Inter-Regular.otf"),
    "Inter-SemiBold": require("@assets/fonts/Inter-SemiBold.otf"),
    "Inter-Thin": require("@assets/fonts/Inter-Thin.otf"),
  });

  const hideSplashScreen = () => {
    setTimeout(() => {
      setIsSplashScreenVisible(false);
    }, 1000);
  };

  React.useEffect(() => {
    if (fontsLoaded) {
      console.log("\x1b[42m%s\x1b[0m", "isLoading content");
      hideSplashScreen();
    }
  }, [fontsLoaded]);

  return (
    <View style={{ flex: 1 }}>
      {isSplashScreenVisible && <AnimatedSplashScreen />}
      {!isSplashScreenVisible && children}
    </View>
  );
};

export default AppLayout;
