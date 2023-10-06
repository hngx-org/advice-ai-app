import {
  Text,
  View,
  TextInput,
  FlatList, // Import FlatList
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppScreen } from "../components/shared";
import { ChatsStackParamList } from "../navigation/ChatNavigation";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../theme";
import {
  addMessage,
  conversationHistoryselector,
} from "../redux/slices/conversationHistorySlice";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../redux/store";
import { RootTabParamList } from "../navigation/DashboardTabs";
import { SettingsStackParamList } from "../navigation/SettingsNavigation";
import { handleRequestError } from "../services/api";
import Toast from "react-native-root-toast";
import { handleAIPrompt } from "../services/chats";

type Props = NativeStackScreenProps<
  ChatsStackParamList & RootTabParamList & SettingsStackParamList,
  "_ChatDisplay"
>;

const ChatDisplayScreen = ({ navigation }: Props) => {
  const [userQuery, setUserQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [conversationHistory, setConversationHistory] = useState<string[]>([]);
  const dispatch = useDispatch();

  const { history } = useAppSelector(conversationHistoryselector);

  const handleGetAdvice = async () => {
    setIsLoading(true);

    if (userQuery) {
      setIsLoading(true);

      const newConversationHistory = [
        ...conversationHistory,
        `user: ${userQuery.trim()}`,
      ];

      const data = {
        history: newConversationHistory,
        user_input: `Give me advice on "${userQuery.trim()}"`,
      };

      await handleAIPrompt(
        data,
        (res) => {
          const updatedConversationHistory = [
            ...newConversationHistory,
            `AI: ${res?.data?.message}`,
          ];
          setConversationHistory(updatedConversationHistory);
          dispatch(addMessage(updatedConversationHistory));

          setUserQuery("");

          console.log(res);
          setIsLoading(false);
        },
        (error) => {
          if (
            error?.response?.data?.message?.includes(
              "You do not have enough credits"
            )
          ) {
            Alert.alert(
              "Alert",
              error?.response?.data?.message,
              [
                {
                  text: "OK",
                  onPress: () => navigation.navigate("_Subscribe"),
                },
              ],
              { cancelable: false }
            );
          } else {
            handleRequestError(error);
          }

          setIsLoading(false);
        }
      );
    } else {
      Toast.show("Hello, the prompt is empty how can we be of help");
    }
  };

  return (
    <AppScreen>
      <Text
        style={{
          color: "black",
          fontSize: 18,
          backgroundColor: "#E5E7EB",
          padding: 10,
          borderRadius: 5,
          textAlign: "center",
        }}
      >
        Ask for advice:
      </Text>

      <FlatList // Use FlatList to display conversation history
        data={history}
        renderItem={({ item, index }) => {
          return (
            <View
              style={[
                styles.messageContainer,
                index % 2 === 0 ? styles.rightMessage : styles.leftMessage,
              ]}
            >
              <Text style={styles.messageText}>{item}</Text>
            </View>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />

      <View>
        <View
          style={{
            backgroundColor: theme.inputBgColor,
            borderRadius: 4,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TextInput
            value={userQuery}
            onChangeText={(text) => setUserQuery(text)}
            placeholder="Enter your question or topic"
            style={{ paddingLeft: 5, width: "90%" }}
            multiline={true}
            numberOfLines={3}
          />

          {isLoading ? (
            <ActivityIndicator color={theme.secColor} animating={true} />
          ) : (
            <TouchableOpacity onPress={handleGetAdvice}>
              <Ionicons name="send" size={24} color={theme.secColor} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    maxWidth: "80%",
  },
  leftMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#f0f0f0",
  },
  rightMessage: {
    alignSelf: "flex-end",
    backgroundColor: theme.placeholderColor,
  },
  messageText: {
    fontSize: 16,
  },
});
export default ChatDisplayScreen;
