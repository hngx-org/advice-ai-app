import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// Define a type for the slice state
interface ConversationHistoryItem {
    id: number;
    user: string;
    ai: string;
  }

// Define the initial state using that type


const initialConversationHistory: ConversationHistoryItem[] = [];


const initialState = {
  history:[]
};

// Create a slice for the conversation history
export const conversationHistorySlice = createSlice({
    name: "conversationHistory",
    initialState,
    reducers: {
      // Add an action to add a new message to the conversation history
      addMessage: (state, action: PayloadAction<any>) => {

        state.history = action.payload;
        
      },
 

      clearHistory: (state) => {
        return { history: [] };
      },
    },
  });
  


// Export the action creators
export const { addMessage, clearHistory } = conversationHistorySlice.actions;

// Define a selector to get the conversation history from the Redux store
export const conversationHistoryselector = (state: RootState) => state.conversationHistoryReducer;

// Export the reducer
export const   conversationHistoryReducer = conversationHistorySlice.reducer;