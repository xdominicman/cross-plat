import { Stack } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import styles from "./appStyles";
import userData from "./data.json";

import UserItem from "./components/UserItem.js";

export default function App() {
  const [users, setUsers] = useState<
    { name: string; email: string; "photo-url": string }[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setUsers(userData);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <View style={[styles.container, { justifyContent: "center" }]}>
        <ActivityIndicator size="large" color="#6200ee" />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <PaperProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <Stack.Screen options={{ title: "User List" }} />

          <ScrollView contentContainerStyle={styles.container}>
            {users.map((user, index) => (
              <UserItem key={index} user={user} />
            ))}
          </ScrollView>
        </SafeAreaView>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
