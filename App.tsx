import AppNavigation from "./navigation/AppNavigation";
import { RootSiblingParent } from "react-native-root-siblings";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store";
import Toast, {
  ErrorToast,
  SuccessToast,
  ToastConfig,
} from "react-native-toast-message";

const toastConfig: ToastConfig = {
  success: (props) => (
    <SuccessToast
      {...props}
      text1Style={{ fontSize: 14 }}
      text2Style={{ fontSize: 14 }}
    />
  ),

  error: (props) => (
    <ErrorToast
      {...props}
      text1Style={{ fontSize: 14 }}
      text2Style={{ fontSize: 14 }}
    />
  ),
};

export default function App() {
  return (
    <ReduxProvider store={store}>
      <RootSiblingParent>
        <AppNavigation />
        <Toast position="top" config={toastConfig} />
      </RootSiblingParent>
    </ReduxProvider>
  );
}
