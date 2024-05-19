import "expo-dev-client";

import { Slot, useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { RootSiblingParent } from "react-native-root-siblings";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import TitleBar from "~/components/core/title-bar";

function AppLayout() {
  return (
    <SafeAreaProvider>
      <RootSiblingParent>
        <StatusBar style="dark" />
        <GestureHandlerRootView>
          <Slot />
        </GestureHandlerRootView>
      </RootSiblingParent>
    </SafeAreaProvider>
  );
}

export default AppLayout;
