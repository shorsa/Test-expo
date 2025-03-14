import { Text } from "@react-navigation/elements";
import React from "react";
import { StyleSheet, View } from "react-native";

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Text>Open up 'src/App.tsx' to start working on your app!</Text>
      {/* <Button screen="Profile">Go to Profile</Button> */}
      {/* <Button screen="Settings">Go to Settings</Button> */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});
