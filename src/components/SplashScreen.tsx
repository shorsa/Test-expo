import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  Easing,
  withTiming,
  withSequence,
  withDelay,
  withSpring,
  Keyframe,
} from "react-native-reanimated";

const keyframeRotateRight = new Keyframe({
  0: {
    transform: [{ rotate: "0deg" }],
  },
  45: {
    transform: [{ rotate: "160deg" }],
  },
  100: {
    transform: [{ rotate: "360deg" }],
  },
});

const keyframeRotateLeft = new Keyframe({
  0: {
    transform: [{ rotate: "360deg" }],
  },
  45: {
    transform: [{ rotate: "160deg" }],
  },
  100: {
    transform: [{ rotate: "0deg" }],
  },
});

interface Props {}

const AnimatedSplashScreen: React.FC<Props> = () => {
  // const spotAnimatedStyle = useAnimatedStyle(() => {
  //   return {
  //     opacity: withSequence(
  //       withTiming(0, { duration: 0 }),
  //       withDelay(0, withTiming(0.7, { duration: 1000 }))
  //     ),
  // transform: [
  //   {
  //     rotate: withRepeat(withTiming(1.5, { duration: 2000 }), -1, true),
  //   },
  // ],
  //   };
  // });

  const scaleAnimation = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withSequence(
            withTiming(0, { duration: 0 }),
            withDelay(
              800,
              withSpring(1, {
                damping: 15,
                stiffness: 90,
              })
            )
          ),
        },
      ],
      opacity: withSequence(
        0,
        withTiming(0, { duration: 0 }),
        withDelay(800, withTiming(1, { duration: 1000 }))
      ),
    };
  });

  return (
    <LinearGradient
      colors={["#ffffff", "#000000"]}
      end={{ x: 0, y: 1 }}
      start={{ x: 0, y: 0 }}
      style={[styles.container]}
    >
      <Animated.Image
        resizeMode="contain"
        style={[
          {
            width: 200,
            height: 200,
            position: "absolute",
            top: 0,
            opacity: 0.47,
            zIndex: 2,
            left: -50,
          },
        ]}
        entering={keyframeRotateRight.duration(6000).delay(200)}
      />
      <Animated.Image
        resizeMode="contain"
        style={[
          {
            position: "absolute",
            width: 260,
            height: 260,
            top: -70,
            left: 50,
            opacity: 0.29,
            zIndex: 1,
          },
        ]}
        entering={keyframeRotateLeft.duration(6000).delay(200)}
      />
      <Animated.Image
        style={[
          {
            position: "absolute",
            width: 200,
            height: 200,
            top: 130,
            right: -80,
            opacity: 0.29,
            zIndex: 1,
          },
        ]}
        entering={keyframeRotateLeft.duration(6000).delay(200)}
      />
      <Animated.Image
        resizeMode="contain"
        style={[styles.image, { zIndex: 99 }, scaleAnimation]}
      />
      <Animated.Image
        resizeMode="contain"
        style={[
          {
            width: 320,
            height: 320,
            position: "absolute",
            bottom: -60,
            zIndex: 2,
            right: -20,
          },
        ]}
        entering={keyframeRotateRight.duration(6000).delay(200)}
      />
    </LinearGradient>
  );
};

export default AnimatedSplashScreen;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 999,
    // ...flexStyles("column", "center", "center"),
  },
  image: {
    width: "100%",
    position: "absolute",
    opacity: 0,
    top: Dimensions.get("window").height / 2 - 70,
    height: 72,
  },
});
