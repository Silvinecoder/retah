import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {
            // This is where you add space in the tab
            height: 70,
            paddingTop: 10,
          },
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Genres",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={30} name="theatermasks.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="movie-list"
        options={{
          title: "Movies",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={30} name="film.circle.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
