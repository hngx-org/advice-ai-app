import { StyleSheet, Text } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppScreen } from "../components/shared";
import { RootTabParamList } from "../navigation/DashboardTabs";
import { theme } from "../theme";

type Props = NativeStackScreenProps<RootTabParamList, "Settings">;

const SettingsScreen = ({ navigation }: Props) => {
  return (
    <AppScreen>
      <Text style={{ color: theme.textLight }}>SettingsScreen</Text>
    </AppScreen>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({});
