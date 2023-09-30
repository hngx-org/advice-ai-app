import { StyleSheet, ViewStyle } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {
  children: React.ReactNode;
  style?: ViewStyle;
}

const AppScreen = ({ children, style }: Props) => {
  return (
    <SafeAreaView
      style={{ flex: 1, paddingVertical: 8, paddingHorizontal: 16, ...style }}
    >
      <StatusBar style="auto" />

      {children}
    </SafeAreaView>
  );
};

export default AppScreen;

const styles = StyleSheet.create({});
