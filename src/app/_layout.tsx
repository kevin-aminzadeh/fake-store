import "expo-dev-client";
import "../styles/global.css";

import Octicons from "@expo/vector-icons/Octicons";
import { Slot, Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { RootSiblingParent } from "react-native-root-siblings";
import { SafeAreaProvider } from "react-native-safe-area-context";

function AppLayout() {
  return (
    <SafeAreaProvider>
      <RootSiblingParent>
        <StatusBar style="light" />
        <GestureHandlerRootView>
          <View className="bg-base-200 flex flex-col w-full h-full justify-center">
            <Slot />
          </View>
        </GestureHandlerRootView>
      </RootSiblingParent>
    </SafeAreaProvider>
  );
}

export default AppLayout;
