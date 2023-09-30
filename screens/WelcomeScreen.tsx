import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigation";
import { AppScreen } from "../components/shared";
import { theme } from "../theme";
import { images } from "../assets/images";

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
        <View style={{ flexDirection: "column", gap: 10, width: "100%" }}>
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
        </View>

        <Image
          source={images.welcomeImage}
          style={{
            width: 300,
            height: 300,
            resizeMode: "center",
          }}
        />

        <View style={{ flexDirection: "column", gap: 10, width: "100%" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Signup")}
            style={{
              alignItems: "center",
              justifyContent: "center",
              paddingVertical: 12,
              paddingHorizontal: 20,
              borderRadius: 10,
              backgroundColor: theme.secColor,
              width: "100%",
            }}
          >
            <Text
              style={{ fontWeight: "600", fontSize: 22, color: theme.textDark }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>

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
        </View>
      </View>
    </AppScreen>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
