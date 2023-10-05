import { StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsScreen from "../screens/SettingsScreen";
import {
  ChatBubbleLeftRightIcon as ChatBubbleLeftRightSolidIcon,
  Cog8ToothIcon as Cog8ToothSolidIcon,
} from "react-native-heroicons/solid";
import {
  ChatBubbleLeftRightIcon,
  Cog8ToothIcon,
} from "react-native-heroicons/outline";
import { theme } from "../theme";
import ChatNavigation from "./ChatNavigation";
import SettingsNavigation from "./SettingsNavigation";

export type RootTabParamList = {
  Chats: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const DashboardTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Chats"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Chats") {
            return focused ? (
              <ChatBubbleLeftRightSolidIcon size={size} color={color} />
            ) : (
              <ChatBubbleLeftRightIcon size={size} color={color} />
            );
          } else if (route.name === "Settings") {
            return focused ? (
              <Cog8ToothSolidIcon size={size} color={color} />
            ) : (
              <Cog8ToothIcon size={size} color={color} />
            );
          }
        },
        tabBarActiveTintColor: theme.secColor,
        tabBarInactiveTintColor: theme.bgColor,
        tabBarLabelStyle: { fontWeight: "600" },
      })}
    >
      <Tab.Screen name="Chats" component={ChatNavigation} />
      <Tab.Screen name="Settings" component={SettingsNavigation} />
    </Tab.Navigator>
  );
};

export default DashboardTabs;

const styles = StyleSheet.create({});
