import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import { View } from "react-native";
import colors from "~/constants/theme/colors";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.dark,
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 0,
          height: "10%",
          position: "absolute",
        },
        tabBarBackground: () => (
          <View className="bg-light w-full flex flex-row flex-1" />
        ),

        tabBarLabelStyle: {
          margin: 0,
          paddingBottom: 8,
        },
      }}
      initialRouteName="collections"
    >
      <Tabs.Screen
        name="collections"
        options={{
          title: "Collections",
          tabBarIcon: ({ color }) => (
            <Ionicons
              size={28}
              name="albums"
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="cart/index"
        options={{
          title: "Cart",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="cart" color={color} />
          ),
        }}
      />

      {/* Hide PDP Route From Tabs */}
      {/* <Tabs.Screen
        name="products"
        options={{
          href: null,
        }}
      /> */}
    </Tabs>
  );
}
