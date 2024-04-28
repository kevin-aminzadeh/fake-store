import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { router } from "expo-router";
import { Pressable, View } from "react-native";

import Heading from "./heading";

type TitleBarProps = {
  title?: string;
  subtitle?: string;
  secondaryNav?: React.ReactNode;
  showBackButton?: boolean;
  onBackButtonPress?: () => void;
  variant?: "dark" | "light";
};

function TitleBar({
  title,
  subtitle,
  secondaryNav,
  showBackButton = false,
  onBackButtonPress = () => {},
  variant = "light",
}: TitleBarProps) {
  return (
    <View className="w-full flex flex-col justify-center items-start pr-8 gap-3">
      {subtitle && (
        <Heading
          className="pl-8"
          text={subtitle}
          variant="subtitle"
          size="xl"
          color={variant === "dark" ? "dark" : "light"}
        />
      )}

      <View className="flex flex-row items-top justify-between w-full">
        {showBackButton ? (
          <Pressable
            onPress={() => {
              Haptics.impactAsync(
                Haptics.ImpactFeedbackStyle.Light,
              );
              router.back();

              onBackButtonPress();
            }}
            className="flex flex-row items-center gap-6 pl-8"
          >
            <Ionicons
              name="chevron-back"
              size={24}
              color={
                variant === "dark" ? "#111111" : "#ffffff"
              }
            />
            {title && (
              <Heading
                text={title}
                size="4xl"
                className="capitalize"
                color={
                  variant === "dark" ? "dark" : "light"
                }
              />
            )}
          </Pressable>
        ) : (
          <Heading
            text={title}
            size="4xl"
            className="pl-8 capitalize"
            color={variant === "dark" ? "dark" : "light"}
          />
        )}

        {secondaryNav && secondaryNav}
      </View>
    </View>
  );
}

export default TitleBar;
