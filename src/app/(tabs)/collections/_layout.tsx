import "expo-dev-client";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { RootSiblingParent } from "react-native-root-siblings";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";

function CollectionListLayout() {
  const tabBarHeight = useBottomTabBarHeight();
  return (
    <SafeAreaProvider>
      <RootSiblingParent>
        <StatusBar style="dark" />
        <GestureHandlerRootView>
          <View
            className="flex flex-col w-full h-full justify-center"
            style={{
              paddingBottom: tabBarHeight,
            }}
          >
            <Slot />
          </View>
        </GestureHandlerRootView>
      </RootSiblingParent>
    </SafeAreaProvider>
  );
}

export default CollectionListLayout;
