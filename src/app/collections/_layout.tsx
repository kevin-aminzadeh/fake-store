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
  const { top } = useSafeAreaInsets();
  const { slug } = useLocalSearchParams();

  return (
    <SafeAreaProvider>
      <RootSiblingParent>
        <StatusBar style="dark" />
        <GestureHandlerRootView>
          <View className="flex flex-col w-full h-full justify-center bg-light">
            <View
              className="flex flex-col w-full justify-start items-start pb-4"
              style={{
                paddingTop: top + 16,
              }}
            >
              <TitleBar
                title={slug as string}
                variant="dark"
                showBackButton
              />
            </View>
            <Slot />
          </View>
        </GestureHandlerRootView>
      </RootSiblingParent>
    </SafeAreaProvider>
  );
}

export default AppLayout;
