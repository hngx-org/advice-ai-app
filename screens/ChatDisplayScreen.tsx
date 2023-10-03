import {
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import React, { useState } from "react";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppScreen, InputField } from "../components/shared";
import { ChatsStackParamList } from "../navigation/ChatNavigation";

import axios from "axios";

import { Ionicons } from "@expo/vector-icons";
import { theme } from "../theme";

type Props = NativeStackScreenProps<ChatsStackParamList, "_ChatDisplay">;

interface AdviceAppProps { }

interface Choice {
  text: string;
}

const ChatDisplayScreen = ({ navigation }: Props) => {
  const [userQuery, setUserQuery] = useState<string>("");
  const [advice, setAdvice] = useState<string>("");

  const [isLoading, setIsLoading] = useState(false);

  const handleGetAdvice = async () => {
    try {
      const apiKey = "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";
      // const apiKey = "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";

      setIsLoading(true);

      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "user",
              content: `Give me advice on "${userQuery}"`,
            },
          ],
          // prompt: `Give me advice on "${userQuery}"`,
          // max_tokens: 500,
        },
        {
          headers: {
            // Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
        }
      );

      setAdvice(response.data.choices[0].message?.content);
      setIsLoading(false);

      // setAdvice(response.data.choices[0].text);
    } catch (error: any) {
      console.error(error);
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

      <ScrollView>
        <View style={{ flex: 1 }}>
          <Text style={{ color: "white", fontSize: 18 }}>Advice:</Text>
          <Text style={{ color: "white", fontSize: 18 }}>{advice}</Text>
        </View>
      </ScrollView>

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
            style={{ padding: 10, width: "90%" }}
            multiline={true}
            numberOfLines={4}
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

export default ChatDisplayScreen;
