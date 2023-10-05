import { apiClient } from "../api";
import { handleGetUserProfile } from "../auth";
import { endpoints } from "../endpoints";
import { IAIPrompt } from "./types";

export async function handleAIPrompt(
  data: IAIPrompt,
  onSuccess: (res: any) => void,
  onError: (err: any) => void
) {
  try {
    const res = await apiClient.post(endpoints.chat.completion, data);

    onSuccess(res);

    handleGetUserProfile();

    return res;
  } catch (error: any) {
    onError(error);
  }
}
