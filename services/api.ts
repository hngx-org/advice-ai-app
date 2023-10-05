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
  const errorToShow = error?.response?.data?.message;

  if (typeof errorToShow === "string") {
    return handleErrorMessage(errorToShow);
  } else if (typeof errorToShow === "object" && errorToShow.length > 0) {
    errorToShow.map((err: any) =>
      handleErrorMessage(`(${err.field}): ${err.error}`)
    );
  } else {
    handleErrorMessage("An error occurred");
  }
}
