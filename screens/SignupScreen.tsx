import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigation";
import {
  AppScreen,
  BackButton,
  CustomButton,
  InputField,
} from "../components/shared";
import { images } from "../assets/images";
import { theme } from "../theme";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";

type Props = NativeStackScreenProps<RootStackParamList, "Signup">;

const SignupScreen = ({ navigation }: Props) => {
  return (
    <AppScreen isScrollable={true}>
      <BackButton />

      <Animated.View
        entering={FadeInUp.delay(100).duration(500).springify()}
        style={{
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 24,
        }}
      >
        <Image
          source={images.signupImage}
          style={{
            width: 200,
            height: 100,
            resizeMode: "contain",
            marginBottom: 10,
          }}
        />
      </Animated.View>

      <Animated.Text
        entering={FadeInUp.delay(100).duration(500).springify()}
        style={{
          fontSize: 32,
          color: theme.secColor,
          textAlign: "center",
          fontWeight: "700",
          marginBottom: 16,
        }}
      >
        Sign Up
      </Animated.Text>

      <View
        style={{
          backgroundColor: theme.textLight,
          borderRadius: 4,
          paddingVertical: 30,
          paddingHorizontal: 24,
        }}
      >
        <Animated.View entering={FadeInDown.delay(0).duration(500).springify()}>
          <InputField label="Name" placeholder="Enter your full name" />
        </Animated.View>

        <Animated.View
          entering={FadeInDown.delay(200).duration(500).springify()}
        >
          <InputField
            label="Email Address"
            placeholder="Enter your email address"
          />
        </Animated.View>

        <Animated.View
          entering={FadeInDown.delay(400).duration(500).springify()}
        >
          <InputField
            label="Password"
            placeholder="Enter your password"
            secureTextEntry
          />
        </Animated.View>

        <Animated.View
          entering={FadeInDown.delay(600).duration(500).springify()}
        >
          <InputField
            label="Confirm Password"
            placeholder="Enter your password"
            secureTextEntry
          />
        </Animated.View>

        <Animated.View
          entering={FadeInDown.delay(800).duration(500).springify()}
        >
          <CustomButton
            text="Sign Up"
            onPress={() => navigation.navigate("DashboardTab")}
            textStyle={{ fontSize: 16 }}
            buttonStyle={{ marginVertical: 20 }}
          />

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 14,
                color: theme.textDark,
                fontWeight: "400",
              }}
            >
              Already have an account?{" "}
            </Text>

            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text
                style={{
                  fontSize: 14,
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

export default SignupScreen;

const styles = StyleSheet.create({});
