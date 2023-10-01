import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChatsScreen from "../screens/ChatsScreen";
import ChatDisplayScreen from "../screens/ChatDisplayScreen";

export type ChatsStackParamList = {
  _Chats: undefined;
  _ChatDisplay: undefined;
};

const Stack = createNativeStackNavigator<ChatsStackParamList>();

const ChatNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="_Chats"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="_Chats" component={ChatsScreen} />
      <Stack.Screen name="_ChatDisplay" component={ChatDisplayScreen} />
    </Stack.Navigator>
  );
};

export default ChatNavigation;

const styles = StyleSheet.create({});
