import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsScreen from "../screens/SettingsScreen";
import SubscribeScreen from "../screens/SubscribeScreen";

export type SettingsStackParamList = {
  _Settings: undefined;
  _Subscribe: undefined;
};

const Stack = createNativeStackNavigator<SettingsStackParamList>();

const SettingsNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="_Settings"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="_Settings" component={SettingsScreen} />
      <Stack.Screen
        name="_Subscribe"
        component={SubscribeScreen}
        options={{ presentation: "modal" }}
      />
    </Stack.Navigator>
  );
};

export default SettingsNavigation;

const styles = StyleSheet.create({});
