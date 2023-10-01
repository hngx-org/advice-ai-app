import { StyleSheet } from "react-native";
import React from "react";
import DashboardScreen from "../screens/DashboardScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HistoryScreen from "../screens/HistoryScreen";
import SettingsScreen from "../screens/SettingsScreen";
import {
  CircleStackIcon as CircleStackSolidIcon,
  Cog8ToothIcon as Cog8ToothSolidIcon,
  RectangleGroupIcon as RectangleGroupSolidIcon,
} from "react-native-heroicons/solid";
import {
  CircleStackIcon,
  Cog8ToothIcon,
  RectangleGroupIcon,
} from "react-native-heroicons/outline";
import { theme } from "../theme";

export type RootTabParamList = {
  Dashboard: undefined;
  History: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const DashboardTabs = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Dashboard"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === "Dashboard") {
              return focused ? (
                <RectangleGroupSolidIcon size={size} color={color} />
              ) : (
                <RectangleGroupIcon size={size} color={color} />
              );
            } else if (route.name === "History") {
              return focused ? (
                <CircleStackSolidIcon size={size} color={color} />
              ) : (
                <CircleStackIcon size={size} color={color} />
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
        <Tab.Screen name="Dashboard" component={DashboardScreen} />
        <Tab.Screen name="History" component={HistoryScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </>
  );
};

export default DashboardTabs;

const styles = StyleSheet.create({});
