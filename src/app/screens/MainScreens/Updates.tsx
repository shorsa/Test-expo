import { StyleSheet, View, Text, TextInput } from "react-native";
import { KeyboardAvoidingView } from "react-native-keyboard-controller";

export function Updates() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="position">
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Search" />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
  },
});
