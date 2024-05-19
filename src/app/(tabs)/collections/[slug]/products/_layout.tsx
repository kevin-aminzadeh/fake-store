import "expo-dev-client";

import { Ionicons } from "@expo/vector-icons";
import classNames from "classnames";
import * as Haptics from "expo-haptics";
import { router, Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Pressable, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { RootSiblingParent } from "react-native-root-siblings";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import baseColors from "tailwindcss/colors";

import colors from "~/constants/theme/colors";

function ProductLayout() {
  const { top, left, right } = useSafeAreaInsets();
  const [wishlisted, setWishlisted] =
    useState<boolean>(false);

  return (
    <SafeAreaProvider>
      <RootSiblingParent>
        <StatusBar style="dark" />
        <GestureHandlerRootView>
          <View className="flex flex-col w-full h-full justify-center">
            <View
              className="absolute z-50 w-full flex flex-row justify-between left-0 top-0"
              style={{
                paddingTop: top + 14,
                paddingLeft: left + 21,
                paddingRight: right + 12,
              }}
            >
              <Pressable
                onPress={() => {
                  Haptics.impactAsync(
                    Haptics.ImpactFeedbackStyle.Light,
                  );

                  router.back();
                }}
                className="flex flex-row items-center justify-center"
              >
                <View className="bg-[#EBE9EA] p-2 rounded-full flex justify-center items-center">
                  <Ionicons
                    name="chevron-back"
                    size={24}
                    color="dark"
                  />
                </View>
              </Pressable>

              <Pressable
                className={classNames(
                  "flex flex-row items-center justify-center",
                )}
                onPress={() => {
                  Haptics.impactAsync(
                    Haptics.ImpactFeedbackStyle.Light,
                  );
                  setWishlisted(!wishlisted);
                }}
              >
                <View
                  className={classNames(
                    "p-2 rounded-full flex justify-center items-center",
                    wishlisted
                      ? "bg-[#EDE9EA]"
                      : "bg-[#EDE9EA]",
                  )}
                >
                  <Ionicons
                    name={
                      wishlisted ? "heart" : "heart-outline"
                    }
                    size={24}
                    color={
                      wishlisted
                        ? baseColors.red[500]
                        : colors["neutral-content"]
                    }
                  />
                </View>
              </Pressable>
            </View>
            <Slot />
          </View>
        </GestureHandlerRootView>
      </RootSiblingParent>
    </SafeAreaProvider>
  );
}

export default ProductLayout;
