import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import React from "react";
import { theme } from "../../theme";

interface Props extends TextInputProps {
  label?: string;
}

export default function InputField({ label, ...rest }: Props) {
  return (
    <View style={{ marginVertical: 12 }}>
      {!!label && (
        <Text
          style={{
            color: theme.textDark,
            fontWeight: "600",
            marginBottom: 4,
          }}
        >
          {label}
        </Text>
      )}

      <TextInput
        style={{
          backgroundColor: theme.inputBgColor,
          padding: 8,
          borderRadius: 4,
        }}
        placeholderTextColor={theme.placeholderColor}
        {...rest}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
