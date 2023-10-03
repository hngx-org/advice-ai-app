import axios from "axios";
import Toast from "react-native-toast-message";

const BASE_URL = "https://spitfire-interractions.onrender.com/api";

const defaultOptions = {
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
};

export const apiClient = axios.create(defaultOptions);

export function handleSuccessMessage(message: string) {
  return Toast.show({
    type: "success",
    text1: "Success!",
    text2: message,
  });
}

export function handleErrorMessage(message: string) {
  return Toast.show({
    type: "error",
    text1: "Error!",
    text2: message,
  });
}

export function handleRequestError(error: any) {
  handleErrorMessage(error?.response?.data?.message);
}
