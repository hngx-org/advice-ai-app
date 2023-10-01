import { apiClient, handleRequestError, handleSuccessMessage } from "../api";
import { endpoints } from "../endpoints";
import { ILoginDetails, ISignupDetails } from "./types";
import { store } from "../../redux/store";
import { saveUserProfile, setLoginState } from "../../redux/slices/authSlice";

const { dispatch } = store;

export async function handleSignup(
  data: ISignupDetails,
  onSuccess: () => void
) {
  try {
    const res = await apiClient.post(endpoints.auth.signup, data);

    handleSuccessMessage(res?.data?.message);

    onSuccess();

    return res;
  } catch (error: any) {
    handleRequestError(error);
  }
}

export async function handleLogin(data: ILoginDetails, onSuccess: () => void) {
  try {
    const res = await apiClient.post(endpoints.auth.login, data);

    dispatch(saveUserProfile(res?.data?.data));
    dispatch(setLoginState(true));

    onSuccess();

    return res;
  } catch (error: any) {
    dispatch(setLoginState(false));
    handleRequestError(error);
  }
}

export async function handleLogout() {
  try {
    const res = await apiClient.get(endpoints.auth.logout);

    dispatch(setLoginState(false));

    return res;
  } catch (error: any) {
    handleRequestError(error);
  }
}

export async function handleGetUserProfile() {
  try {
    const res = await apiClient.get(endpoints.auth.profile);

    dispatch(saveUserProfile(res?.data?.data));

    return res;
  } catch (error: any) {
    handleRequestError(error);
  }
}
