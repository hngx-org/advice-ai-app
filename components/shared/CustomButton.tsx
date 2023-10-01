import {
  Text,
  TouchableOpacity,
  GestureResponderEvent,
  TextStyle,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { theme } from "../../theme";

interface Props {
  text: string;
  onPress: (event: GestureResponderEvent) => void;
  buttonStyle?: TextStyle;
  textStyle?: TextStyle;
  isLoading?: boolean;
}

const CustomButton = ({
  onPress,
  text,
  buttonStyle,
  textStyle,
  isLoading = false,
}: Props) => {
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
        opacity: isLoading ? 0.6 : 1,
        width: "100%",
        ...buttonStyle,
      }}
      disabled={isLoading}
    >
      {isLoading ? (
        <ActivityIndicator color={theme.textDark} animating={true} />
      ) : (
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
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
