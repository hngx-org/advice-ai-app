
import {
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity
} from "react-native";

import { useState } from "react";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppScreen, InputField } from "../components/shared";
import { ChatsStackParamList } from "../navigation/ChatNavigation";

import axios from "axios";

import { Ionicons } from '@expo/vector-icons';

type Props = NativeStackScreenProps<ChatsStackParamList, "_ChatDisplay">;


interface AdviceAppProps { }

interface Choice {
  text: string;
}

const ChatDisplayScreen = ({ navigation }: Props) => {
  const [userQuery, setUserQuery] = useState<string>("");
  const [advice, setAdvice] = useState<string>("");




  const handleGetAdvice = async () => {
    try {
      const apiKey = "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";
      const response = await axios.post(
        "https://api.openai.com/v1/engines/text-davinci-002/completions",
        {
          prompt: `Give me advice on "${userQuery}"`,
          max_tokens: 50,
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
        }
      );

      setAdvice(response.data.choices[0].text);
    } catch (error: any) {
      console.error(error);
    }
  };
  return (
    <AppScreen>

      <Text style={{ color: "black", fontSize: 18, backgroundColor: "#E5E7EB", padding: 10, borderRadius: 5, textAlign: "center" }}>Ask for advice:</Text>

      <View style={{ flex: 1 }}>

        <Text style={{ color: "white", fontSize: 18 }}>Advice: {advice}</Text>
      </View>

      <View>
        <View style={{ backgroundColor: "#E5E7EB", flexDirection: "row", alignItems: "center" }}>
          <TextInput
            value={userQuery}
            onChangeText={(text) => setUserQuery(text)}
            placeholder="Enter your question or topic"
            style={{ padding: 10, width: "90%" }}
            multiline={true}
            numberOfLines={4}
          />


          <TouchableOpacity onPress={handleGetAdvice} >

            <Ionicons name="send" size={24} color="#FACC15" />

          </TouchableOpacity>

        </View>
      </View>
    </AppScreen >
  );
};

export default ChatDisplayScreen;
