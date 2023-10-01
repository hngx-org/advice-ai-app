import { StyleSheet, Text } from "react-native";
import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppScreen, CustomButton } from "../components/shared";
import { RootTabParamList } from "../navigation/DashboardTabs";
import { theme } from "../theme";
import { handleLogout } from "../services/auth";

type Props = NativeStackScreenProps<RootTabParamList, "Settings">;

const SettingsScreen = ({ navigation }: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  async function handleLogoutClick() {
    setIsLoading(true);

    await handleLogout();

    setIsLoading(false);
  }

  return (
    <AppScreen>
      <Text style={{ color: theme.textLight, marginBottom: 20 }}>
        Settings Screen
      </Text>

      <CustomButton
        text="Temporary Logout Button"
        onPress={() => handleLogoutClick()}
        buttonStyle={{ backgroundColor: "tomato" }}
        isLoading={isLoading}
      />
    </AppScreen>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({});
