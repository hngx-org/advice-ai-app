import { StyleSheet, Text } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppScreen } from "../components/shared";
import { RootTabParamList } from "../navigation/DashboardTabs";
import { theme } from "../theme";

type Props = NativeStackScreenProps<RootTabParamList, "History">;

const HistoryScreen = ({ navigation }: Props) => {
  return (
    <AppScreen>
      <Text style={{ color: theme.textLight }}>HistoryScreen</Text>
    </AppScreen>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({});
