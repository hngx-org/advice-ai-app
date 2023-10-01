import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppScreen } from "../components/shared";
import { RootTabParamList } from "../navigation/DashboardTabs";
import { theme } from "../theme";
import { PlusIcon } from "react-native-heroicons/solid";
import Animated, { FadeInUp } from "react-native-reanimated";
import { images } from "../assets/images";

type Props = NativeStackScreenProps<RootTabParamList, "Chats">;

const ChatsScreen = ({ navigation }: Props) => {
  const dummyMessages: any[] = [];
  // [1, 2, 3, 4, 5, 12, 22, 32, 42, 52, 11, 21, 31, 14, 15];

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

      {dummyMessages.length === 0 ? (
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
            You didn't made any advice conversation yet
          </Text>

          <TouchableOpacity onPress={() => {}}>
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
          {dummyMessages.map((item) => (
            <TouchableOpacity key={item}>
              <View
                style={{
                  paddingVertical: 16,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 16,
                  borderBottomWidth: 0.3,
                  borderBottomColor: theme.textDark,
                  paddingHorizontal: 24,
                }}
              >
                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      color: theme.textLight,
                      fontWeight: "500",
                      fontSize: 16,
                      marginBottom: 4,
                    }}
                  >
                    Car Advice
                  </Text>
                  <Text
                    style={{
                      color: theme.textLight,
                      fontWeight: "200",
                      fontSize: 12,
                    }}
                  >
                    Assuming you are asking for advice on how to get a car...
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
                  <Text style={{ fontWeight: "500" }}>20</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}

      {dummyMessages.length > 0 && (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {}}
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
