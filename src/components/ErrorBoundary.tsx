import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { colors } from "src/constants/colors";
import * as Haptics from "expo-haptics";

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
  }

  handleReportError = async () => {
    const errorDetails = `
      Error: ${this.state.error?.message}
      Stack: ${this.state.error?.stack}
    `;

    const mailtoUrl = `mailto:support@yourapp.com?subject=App Error Report&body=${encodeURIComponent(
      errorDetails
    )}`;
    await Linking.openURL(mailtoUrl);
  };

  render() {
    if (this.state.hasError) {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Oops! Something went wrong</Text>
          <Text style={styles.message}>
            We apologize for the inconvenience. Please try one of the following
            options:
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.setState({ hasError: false });
              // @ts-ignore - navigation prop will be available in the app
              this.props.navigation?.navigate("Home");
            }}
          >
            <Text style={styles.buttonText}>Go to Home Screen</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.reportButton]}
            onPress={this.handleReportError}
          >
            <Text style={styles.buttonText}>Report Error</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return this.props.children;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
    color: colors.black,
  },
  message: {
    fontSize: 16,
    marginBottom: 32,
    textAlign: "center",
    color: colors.black,
  },
  button: {
    backgroundColor: colors.lightBlue,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 16,
    minWidth: 200,
    alignItems: "center",
  },
  reportButton: {
    backgroundColor: colors.error,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "600",
  },
});

export default ErrorBoundary;
