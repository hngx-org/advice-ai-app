import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigation";
import { AppScreen } from "../components/shared";

type Props = NativeStackScreenProps<RootStackParamList, "Welcome">;

const WelcomeScreen = ({ navigation }: Props) => {
  return (
    <AppScreen>
      <Text>WelcomeScreen</Text>
    </AppScreen>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
