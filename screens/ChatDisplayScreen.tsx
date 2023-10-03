import {
  Text,
  View,
  TextInput,
  Button,
  FlatList, // Import FlatList
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppScreen, InputField } from "../components/shared";
import { ChatsStackParamList } from "../navigation/ChatNavigation";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../theme";
import { useSelector } from "react-redux";
import { addMessage, conversationHistoryselector } from "../redux/slices/conversationHistorySlice";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../redux/store";

type Props = NativeStackScreenProps<
  ChatsStackParamList & RootTabParamList,
  "_ChatDisplay"
>;

const baseUrl = "https://spitfire-interractions.onrender.com/";

const ChatDisplayScreen = ({ navigation }: Props) => {
  const [userQuery, setUserQuery] = useState<string>("");
  const [advice, setAdvice] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [conversationHistory, setConversationHistory] = useState<string[]>([]);
  const dispatch = useDispatch();


  const { history } = useAppSelector(conversationHistoryselector);

  console.log({ history });




  const getSignedInUser = async () => {
    const req = await fetch(`${baseUrl}/api/auth/@me`);
    const user = await req.json();
    console.log(user);
  };

  useEffect(() => {
    getSignedInUser();
  }, []);

  const handleGetAdvice = async () => {
    try {
      setIsLoading(true);

      if (userQuery) {
        const newConversationHistory = [...conversationHistory, `user: ${userQuery}`];

        const req = await fetch(`${baseUrl}/api/chat/completions`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            history: newConversationHistory,
            user_input: `Give me advice on "${userQuery}"`,
          }),
        });

        const response = await req.json();

        if (response?.error) {
          Alert.alert(
            "Alert",
            `${response?.error} ${response?.message}`,
            [{ text: "OK", onPress: () => navigation.navigate("Settings") }],
            { cancelable: false }
          );
        } else {
          const updatedConversationHistory = [...newConversationHistory, `AI: ${response?.message}`];
          setConversationHistory(updatedConversationHistory);
          dispatch(addMessage(updatedConversationHistory));
          setAdvice(response?.message);
        }
      } else {
        Alert.alert("Hello, the prompt is empty how can we be of help");
      }

      setIsLoading(false);
    } catch (error: any) {

      Alert.alert(
        "Alert",
        `${error} `,
        [{ text: "OK" }],
        { cancelable: false }
      );

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

            <View style={[styles.messageContainer, index % 2 === 0 ? styles.leftMessage : styles.rightMessage]}>
              <Text style={styles.messageText}>{item}</Text>
            </View>
          )
        }

          // (
          //   <Text style={{ color: "white", fontSize: 18 }}>{item}</Text>
          // )


        }
        keyExtractor={(item, index) => index.toString()}
      />

      <View>
        <View
          style={{
            backgroundColor: "#E5E7EB",
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
    maxWidth: '70%',
  },
  leftMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#f0f0f0',
  },
  rightMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#e0e0e0',
  },
  messageText: {
    fontSize: 16,
  },
});
export default ChatDisplayScreen;
