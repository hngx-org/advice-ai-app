import { StyleSheet, Text } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigation";
import { AppScreen } from "../components/shared";

type Props = NativeStackScreenProps<RootStackParamList, "Dashboard">;

const DashboardScreen = ({ navigation }: Props) => {
  return (
    <AppScreen>
      <Text>DashboardScreen</Text>
    </AppScreen>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({});
