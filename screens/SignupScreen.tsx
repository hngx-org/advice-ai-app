import { StyleSheet, Text } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigation";
import { AppScreen } from "../components/shared";

type Props = NativeStackScreenProps<RootStackParamList, "Signup">;

const SignupScreen = ({ navigation }: Props) => {
  return (
    <AppScreen>
      <Text>SignupScreen</Text>
    </AppScreen>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({});
