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

type Props = NativeStackScreenProps<RootStackParamList, "Signup">;

const SignupScreen = ({ navigation }: Props) => {
  return (
    <AppScreen isScrollable={true}>
      <BackButton />

      <View
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
      </View>

      <Text
        style={{
          fontSize: 32,
          color: theme.secColor,
          textAlign: "center",
          fontWeight: "700",
          marginBottom: 16,
        }}
      >
        Sign Up
      </Text>

      <View
        style={{
          backgroundColor: theme.textLight,
          borderRadius: 10,
          paddingVertical: 30,
          paddingHorizontal: 24,
        }}
      >
        <InputField label="Name" placeholder="Enter your full name" />

        <InputField
          label="Email Address"
          placeholder="Enter your email address"
        />

        <InputField
          label="Password"
          placeholder="Enter your password"
          secureTextEntry
        />

        <InputField
          label="Confirm Password"
          placeholder="Enter your password"
          secureTextEntry
        />

        <CustomButton
          text="Sign Up"
          onPress={() => {}}
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
      </View>
    </AppScreen>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({});
