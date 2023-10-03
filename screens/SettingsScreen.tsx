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

type Props = NativeStackScreenProps<RootTabParamList, "Settings">;

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

      <View style={{ flex: 1 }}>
        <Text
          style={{
            color: theme.textLight,
            fontWeight: "500",
            fontSize: 16,
            marginBottom: 2,
            textAlign: "center",
          }}
        >
          {userProfile.name}
        </Text>
        <Text
          style={{
            color: theme.textLight,
            fontWeight: "200",
            fontSize: 12,
            textAlign: "center",
          }}
        >
          {userProfile.email}
        </Text>
      </View>

      <CustomButton
        text="Logout"
        onPress={() => handleLogoutClick()}
        buttonStyle={{ backgroundColor: "tomato" }}
        isLoading={isLoading}
      />
    </AppScreen>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({});
