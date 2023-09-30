import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigation";
import { AppScreen, CustomButton } from "../components/shared";
import { theme } from "../theme";
import { images } from "../assets/images";
import Animated, {
  BounceIn,
  FadeInDown,
  FadeInUp,
  RotateInDownLeft,
  SlideInLeft,
} from "react-native-reanimated";

type Props = NativeStackScreenProps<RootStackParamList, "Welcome">;

const WelcomeScreen = ({ navigation }: Props) => {
  return (
    <AppScreen>
      <View
        style={{
          flex: 1,
          marginVertical: 16,
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Animated.View
          entering={FadeInUp.delay(200).duration(500).springify()}
          style={{ flexDirection: "column", gap: 10, width: "100%" }}
        >
          <Text
            style={{
              fontSize: 42,
              color: theme.secColor,
              textAlign: "center",
              fontWeight: "700",
            }}
          >
            Advice AI App
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: theme.textLight,
              textAlign: "center",
              fontWeight: "200",
            }}
          >
            A modern Artificial Intelligence Advice system that gives the advice
            you need
          </Text>
        </Animated.View>

        <Animated.Image
          entering={FadeInDown.delay(400).duration(500).springify()}
          source={images.welcomeImage}
          style={{
            width: 300,
            height: 300,
            resizeMode: "center",
          }}
        />

        <Animated.View
          entering={FadeInDown.delay(200).duration(500).springify()}
          style={{ flexDirection: "column", gap: 10, width: "100%" }}
        >
          <CustomButton
            text="Sign Up"
            onPress={() => navigation.navigate("Signup")}
          />

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: theme.textLight,
                fontWeight: "400",
              }}
            >
              Already have an account?{" "}
            </Text>

            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text
                style={{
                  fontSize: 16,
                  color: theme.secColor,
                  fontWeight: "600",
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
    </AppScreen>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
