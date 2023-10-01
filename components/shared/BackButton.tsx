import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { theme } from "../../theme";
import { ArrowLeftIcon } from "react-native-heroicons/solid";

export default function BackButton() {
  const navigation = useNavigation();

  return (
    <View style={{ flexDirection: "row", marginBottom: 16 }}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.goBack()}
        style={{
          backgroundColor: theme.secColor,
          padding: 8,
          borderRadius: 4,
        }}
      >
        <ArrowLeftIcon size="20" color={theme.textDark} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
