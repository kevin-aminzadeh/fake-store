import "expo-dev-client";
import "../styles/global.css";
import { Slot, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { RootSiblingParent } from "react-native-root-siblings";
import { SafeAreaProvider } from "react-native-safe-area-context";

function AppLayout() {
  return (
    <SafeAreaProvider>
      <RootSiblingParent>
        <StatusBar style="dark" />
        <GestureHandlerRootView>
          <View className="bg-light flex flex-col w-full h-full justify-center">
            <Stack
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen
                name="(tabs)"
                options={{ headerShown: false }}
              />
            </Stack>
          </View>
        </GestureHandlerRootView>
      </RootSiblingParent>
    </SafeAreaProvider>
  );
}

export default AppLayout;
