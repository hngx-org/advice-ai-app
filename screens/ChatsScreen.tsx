import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppScreen } from "../components/shared";
import { theme } from "../theme";
import { PlusIcon } from "react-native-heroicons/solid";
import Animated, { FadeInUp } from "react-native-reanimated";
import { images } from "../assets/images";

import UserAvatar from "react-native-user-avatar";
import { ChatsStackParamList } from "../navigation/ChatNavigation";
import { useAppSelector } from "../redux/store";
import { conversationHistoryselector } from "../redux/slices/conversationHistorySlice";

type Props = NativeStackScreenProps<ChatsStackParamList, "_Chats">;

const ChatsScreen = ({ navigation }: Props) => {
  const { history } = useAppSelector(conversationHistoryselector);

  const groupedMessages: any[] = [
    // your array values here
  ];

  for (let i = 0; i < history.length; i += 2) {
    const userMessage = history[i];
    const aiMessage = history[i + 1];

    groupedMessages.push({ user: userMessage, ai: aiMessage });
  }

  return (
    <AppScreen style={{ paddingHorizontal: 0 }}>
      <View
        style={{
          borderBottomWidth: 0.3,
          borderBottomColor: theme.textDark,
          paddingHorizontal: 24,
          paddingBottom: 14,
        }}
      >
        <Text
          style={{
            color: theme.secColor,
            fontWeight: "500",
            fontSize: 24,
          }}
        >
          Chats
        </Text>
      </View>

      {groupedMessages.length === 0 ? (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Animated.View
            entering={FadeInUp.delay(100).duration(500).springify()}
            style={{
              alignItems: "center",
              justifyContent: "center",
              paddingHorizontal: 24,
            }}
          >
            <Image
              source={images.emptyChatImage}
              style={{
                width: 300,
                height: 230,
                resizeMode: "contain",
                marginBottom: 10,
              }}
            />
          </Animated.View>
          <Text
            style={{ color: theme.textLight, fontSize: 18, fontWeight: "500" }}
          >
            No Conversation
          </Text>
          <Text
            style={{ color: theme.textLight, fontSize: 14, fontWeight: "300" }}
          >
            You have not make any advice conversation yet
          </Text>

          <TouchableOpacity onPress={() => navigation.navigate("_ChatDisplay")}>
            <Text
              style={{
                marginTop: 16,
                fontSize: 14,
                color: theme.secColor,
                fontWeight: "600",
              }}
            >
              Seek Advice
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <ScrollView>
          {groupedMessages.map((item, key) => (
            <TouchableOpacity
              key={key}
              onPress={() => navigation.navigate("_ChatDisplay")}
            >
              <View
                style={{
                  paddingVertical: 16,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 10,
                  borderBottomWidth: 0.3,
                  borderBottomColor: theme.textDark,
                  paddingHorizontal: 24,
                }}
              >
                <View style={{ flexShrink: 0 }}>
                  <UserAvatar
                    size={35}
                    name={item?.user.replace("user: ", "")}
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      color: theme.textLight,
                      fontWeight: "500",
                      fontSize: 16,
                      marginBottom: 2,
                    }}
                  >
                    {item?.user.replace("user: ", "").substring(0, 20)}
                  </Text>
                  <Text
                    style={{
                      color: theme.textLight,
                      fontWeight: "200",
                      fontSize: 12,
                    }}
                  >
                    {item?.ai.substring(0, 50)}...
                  </Text>
                </View>

                <View
                  style={{
                    borderRadius: 50,
                    backgroundColor: theme.textLight,
                    paddingHorizontal: 2,
                    paddingVertical: 2,
                    minWidth: 20,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ fontWeight: "500" }}>...</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}

      {groupedMessages.length > 0 && (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate("_ChatDisplay")}
          style={{
            position: "absolute",
            width: 50,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            right: 20,
            bottom: 20,
            backgroundColor: theme.secColor,
            borderRadius: 50,
          }}
        >
          <PlusIcon size="30" color={theme.textDark} />
        </TouchableOpacity>
      )}
    </AppScreen>
  );
};

export default ChatsScreen;

const styles = StyleSheet.create({});
