/** @format */

import { Text } from "react-native";

import { Screen } from "./components";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Home from "./components/screen/Home";

export default function App() {
  return (
    <Provider store={store}>
      <Screen>
        <Home />
      </Screen>
    </Provider>
  );
}
