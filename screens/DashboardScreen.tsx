import { StyleSheet, Text } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppScreen } from "../components/shared";
import { RootTabParamList } from "../navigation/DashboardTabs";
import { theme } from "../theme";

type Props = NativeStackScreenProps<RootTabParamList, "Dashboard">;

const DashboardScreen = ({ navigation }: Props) => {
  return (
    <AppScreen>
      <Text style={{ color: theme.textLight }}>DashboardScreen</Text>
    </AppScreen>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({});
