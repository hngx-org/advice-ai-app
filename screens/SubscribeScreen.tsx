import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppScreen, CustomButton } from "../components/shared";
import { RootTabParamList } from "../navigation/DashboardTabs";
import { theme } from "../theme";
import { useAppSelector } from "../redux/store";
import { selectUserProfile } from "../redux/slices/authSlice";
import { Paystack } from "react-native-paystack-webview";
import { handleSuccessMessage } from "../services/api";
import { SettingsStackParamList } from "../navigation/SettingsNavigation";
import {
  SparklesIcon,
  KeyIcon,
  StarIcon,
  UserPlusIcon,
  XMarkIcon,
} from "react-native-heroicons/solid";
import SubscribeItem from "../components/subscribe/SubscribeItem";
import { PAYSTACK_API_KEY } from "../utils/constants";

type Props = NativeStackScreenProps<
  SettingsStackParamList & RootTabParamList,
  "_Subscribe"
>;

const SubscribeScreen = ({ navigation }: Props) => {
  const userProfile = useAppSelector(selectUserProfile);
  const [triggerPayment, setTriggerPayment] = useState(false);

  return (
    <AppScreen isScrollable={true} style={{ position: "relative" }}>
      <View style={{ flex: 1, gap: 4, marginVertical: 20 }}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: theme.secColor,
            padding: 2,
            borderRadius: 20,
            position: "absolute",
            right: 0,
            top: -10,
          }}
        >
          <XMarkIcon size="15" color={theme.textDark} />
        </TouchableOpacity>

        <Text
          style={{
            color: theme.textLight,
            fontWeight: "500",
            fontSize: 24,
            textAlign: "center",
          }}
        >
          UPGRADE
        </Text>
        <Text
          style={{
            color: theme.placeholderColor,
            fontWeight: "400",
            fontSize: 14,
            textAlign: "center",
          }}
        >
          Upgrade to Pro to access all the features
        </Text>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 20,
          }}
        >
          <SparklesIcon size={180} color={theme.secColor} />
        </View>

        <View style={{ gap: 20 }}>
          <SubscribeItem
            Icon={KeyIcon}
            title="Access to all pro features"
            description="Upgrade to the premium version of the app and enjoy all the exclusive features available only to pro user."
          />

          <SubscribeItem
            Icon={UserPlusIcon}
            title="Helpline 24/7"
            description="Get unlimited access to our support team and get help anytime you need it - day or night."
          />

          <SubscribeItem
            Icon={StarIcon}
            title="Unlock unlimited upcoming pro features"
            description="Upgrade to the premium version of the app and enjoy all the exclusive features available only to pro user."
          />
        </View>
      </View>

      {triggerPayment && (
        <Paystack
          paystackKey={PAYSTACK_API_KEY}
          amount={5000}
          billingEmail={userProfile.email}
          billingName={userProfile.name}
          activityIndicatorColor={theme.secColor}
          onCancel={(e) => {
            setTriggerPayment(false);
          }}
          onSuccess={(res) => {
            setTriggerPayment(false);
            handleSuccessMessage("Payment successful");
            navigation.goBack();
          }}
          autoStart={triggerPayment}
        />
      )}

      <CustomButton
        text="Upgrade Now"
        onPress={() => setTriggerPayment(true)}
        buttonStyle={{ marginVertical: 16 }}
      />
    </AppScreen>
  );
};

export default SubscribeScreen;

const styles = StyleSheet.create({});
