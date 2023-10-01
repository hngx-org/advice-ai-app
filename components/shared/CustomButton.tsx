import {
  Text,
  TouchableOpacity,
  GestureResponderEvent,
  TextStyle,
} from "react-native";
import React from "react";
import { theme } from "../../theme";

interface Props {
  text: string;
  onPress: (event: GestureResponderEvent) => void;
  buttonStyle?: TextStyle;
  textStyle?: TextStyle;
}

const CustomButton = ({ onPress, text, buttonStyle, textStyle }: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={{
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 4,
        backgroundColor: theme.secColor,
        width: "100%",
        ...buttonStyle,
      }}
    >
      <Text
        style={{
          fontWeight: "600",
          fontSize: 18,
          color: theme.textDark,
          ...textStyle,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
