import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppScreen, CustomButton } from "../components/shared";
import { RootTabParamList } from "../navigation/DashboardTabs";
import { theme } from "../theme";
import { handleLogout } from "../services/auth";
import UserAvatar from "react-native-user-avatar";
import { useAppSelector } from "../redux/store";
import { selectUserProfile } from "../redux/slices/authSlice";
import { SettingsStackParamList } from "../navigation/SettingsNavigation";

type Props = NativeStackScreenProps<
  SettingsStackParamList & RootTabParamList,
  "_Settings"
>;

const SettingsScreen = ({ navigation }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const userProfile = useAppSelector(selectUserProfile);

  async function handleLogoutClick() {
    setIsLoading(true);

    await handleLogout();

    setIsLoading(false);
  }

  return (
    <AppScreen>
      <View style={{ alignItems: "center", marginVertical: 20 }}>
        <UserAvatar size={120} name={userProfile.name} />
      </View>
      <View style={{ flex: 1, gap: 2 }}>
        <Text
          style={{
            color: theme.textLight,
            fontWeight: "500",
            fontSize: 18,
            textAlign: "center",
          }}
        >
          {userProfile.name}
        </Text>
        <Text
          style={{
            color: theme.placeholderColor,
            fontWeight: "400",
            fontSize: 14,
            textAlign: "center",
          }}
        >
          {userProfile.email}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "400",
              fontSize: 14,
              textAlign: "center",
              marginVertical: 4,
              paddingHorizontal: 10,
              paddingVertical: 4,
              color: theme.textDark,
              backgroundColor: theme.textLight,
              borderRadius: 10,
            }}
          >
            {userProfile.credits} credit{userProfile.credits > 1 ? "s" : ""}{" "}
            left
          </Text>
        </View>
      </View>

      <CustomButton
        text="Upgrade to PRO"
        onPress={() => navigation.navigate("_Subscribe")}
        buttonStyle={{ marginVertical: 16 }}
      />
      <CustomButton
        text="Logout"
        onPress={() => handleLogoutClick()}
        buttonStyle={{ backgroundColor: "tomato" }}
        textStyle={{ color: theme.textLight }}
        isLoading={isLoading}
      />
    </AppScreen>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({});
