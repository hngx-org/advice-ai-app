import { View, Text } from "react-native";
import React from "react";
import { theme } from "../../theme";

interface Props {
  title: string;
  description: string;
  Icon: React.ReactNode;
}

function SubscribeItem({ title, description, Icon }: Props) {
  return (
    <View style={{ flexDirection: "row", gap: 20, alignItems: "center" }}>
      <Icon size={20} color={theme.secColor} />
      <View style={{ flex: 1, gap: 4, marginBottom: 10 }}>
        <Text
          style={{
            color: theme.textLight,
            fontWeight: "500",
            fontSize: 18,
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            color: theme.placeholderColor,
            fontWeight: "200",
            fontSize: 14,
          }}
        >
          {description}
        </Text>
      </View>
    </View>
  );
}

export default SubscribeItem;
