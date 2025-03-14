import { Navigation } from "@app/navigations";

import { Assets as NavigationAssets } from "@react-navigation/elements";
import { Asset } from "expo-asset";
import * as React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Toast from "react-native-toast-message";
import { getAuth } from "@react-native-firebase/auth";
import { KeyboardProvider } from "react-native-keyboard-controller";
import AppLayout from "@app/navigations/AppLayout";

Asset.loadAsync([
  ...NavigationAssets,
  require("./assets/newspaper.png"),
  require("./assets/bell.png"),
]);

export function App() {
  const [isReady, setIsReady] = React.useState(false);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <KeyboardProvider>
          <AppLayout isReady={isReady}>
            <SafeAreaProvider>
              <Navigation onReady={() => {}} />
            </SafeAreaProvider>
            <Toast />
          </AppLayout>
        </KeyboardProvider>
      </Provider>
    </GestureHandlerRootView>
  );
}
