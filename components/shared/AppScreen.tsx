import { ScrollView, StyleSheet, ViewStyle } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "../../theme";

interface Props {
  children: React.ReactNode;
  style?: ViewStyle;
  isScrollable?: boolean;
}

const AppScreen = ({ children, style, isScrollable = false }: Props) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingVertical: 12,
        paddingHorizontal: 24,
        backgroundColor: theme.bgColor,
        ...style,
      }}
    >
      <StatusBar style="light" backgroundColor={theme.statusbarColor} />
      {isScrollable ? (
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          {children}
        </ScrollView>
      ) : (
        children
      )}
    </SafeAreaView>
  );
};

export default AppScreen;

const styles = StyleSheet.create({});
