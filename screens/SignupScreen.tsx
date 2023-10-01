import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
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
import Toast from "react-native-root-toast";
import { EMAIL_REG } from "../utils/constants";
import { handleSignup } from "../services/auth";

type Props = NativeStackScreenProps<RootStackParamList, "Signup">;

const SignupScreen = ({ navigation }: Props) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit() {
    if (
      !fullName.trim() ||
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      Toast.show("All fields are required!");
    } else if (EMAIL_REG.test(email) === false) {
      Toast.show("Invalid email!");
    } else if (password !== confirmPassword) {
      Toast.show("Passwords mismatch!");
    } else {
      setIsLoading(true);

      const data = {
        name: fullName.trim(),
        email: email,
        password: password,
        confirm_password: confirmPassword,
      };

      await handleSignup(data, () => {
        setFullName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");

        navigation.navigate("Login", { email: data.email });
      });

      setIsLoading(false);
    }
  }

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
          <InputField
            label="Name"
            placeholder="Enter your full name"
            value={fullName}
            onChangeText={(value) => setFullName(value.trimStart())}
          />
        </Animated.View>

        <Animated.View
          entering={FadeInDown.delay(200).duration(500).springify()}
        >
          <InputField
            label="Email Address"
            placeholder="Enter your email address"
            value={email}
            onChangeText={(value) => setEmail(value.trim())}
            textContentType="emailAddress"
            autoCapitalize="none"
          />
        </Animated.View>

        <Animated.View
          entering={FadeInDown.delay(400).duration(500).springify()}
        >
          <InputField
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChangeText={(value) => setPassword(value)}
            textContentType="password"
            secureTextEntry
          />
        </Animated.View>

        <Animated.View
          entering={FadeInDown.delay(600).duration(500).springify()}
        >
          <InputField
            label="Confirm Password"
            placeholder="Enter your password"
            value={confirmPassword}
            onChangeText={(value) => setConfirmPassword(value)}
            textContentType="password"
            secureTextEntry
          />
        </Animated.View>

        <Animated.View
          entering={FadeInDown.delay(800).duration(500).springify()}
        >
          <CustomButton
            text="Sign Up"
            onPress={() => handleSubmit()}
            textStyle={{ fontSize: 16 }}
            buttonStyle={{ marginVertical: 20 }}
            isLoading={isLoading}
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
