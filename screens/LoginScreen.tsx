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

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

const LoginScreen = ({ navigation }: Props) => {
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
          source={images.loginImage}
          style={{
            width: 200,
            height: 200,
            resizeMode: "contain",
            marginBottom: 10,
          }}
        />
      </View>

      <Text
        style={{
          fontSize: 36,
          color: theme.secColor,
          textAlign: "center",
          fontWeight: "700",
          marginBottom: 16,
        }}
      >
        Login
      </Text>

      <View
        style={{
          backgroundColor: theme.textLight,
          borderRadius: 10,
          paddingVertical: 30,
          paddingHorizontal: 24,
        }}
      >
        <InputField
          label="Email Address"
          placeholder="Enter your email address"
        />

        <InputField
          label="Password"
          placeholder="Enter your password"
          secureTextEntry
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <TouchableOpacity onPress={() => {}}>
            <Text
              style={{
                fontSize: 14,
                color: theme.secColor,
                fontWeight: "600",
              }}
            >
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>

        <CustomButton
          text="Login"
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
            Don't have an account?{" "}
          </Text>

          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text
              style={{
                fontSize: 14,
                color: theme.secColor,
                fontWeight: "600",
              }}
            >
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </AppScreen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
