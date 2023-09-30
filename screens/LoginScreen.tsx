import { StyleSheet, Text } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigation";
import { AppScreen } from "../components/shared";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

const LoginScreen = ({ navigation }: Props) => {
  return (
    <AppScreen>
      <Text>LoginScreen</Text>
    </AppScreen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
