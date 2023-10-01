import { View, Text } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppScreen } from "../components/shared";
import { ChatsStackParamList } from "../navigation/ChatNavigation";

type Props = NativeStackScreenProps<ChatsStackParamList, "_ChatDisplay">;

const ChatDisplayScreen = ({ navigation }: Props) => {
  return (
    <AppScreen>
      <Text>ChatDisplayScreen</Text>
    </AppScreen>
  );
};

export default ChatDisplayScreen;
