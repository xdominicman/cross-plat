import { Link, Stack } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../../AppStyles";

export default function App() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Stack.Screen options={{ title: "Welcome" }} />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Link href="/home">GO TO NAVIGATION LIST</Link>
      </View>
    </SafeAreaView>
  );
}
