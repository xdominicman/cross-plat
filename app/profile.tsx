import { Link, useLocalSearchParams } from "expo-router";
import { Button, View } from "react-native";
import { Avatar, Card, Text } from "react-native-paper";

export default function Profile() {
  const { userName, userEmail, userPhoto } = useLocalSearchParams<{
    userName: string;
    userEmail: string;
    userPhoto: string;
  }>();

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      }}
    >
      <Card style={{ width: "100%", maxWidth: 400, padding: 20 }}>
        <Card.Content style={{ alignItems: "center" }}>
          <Avatar.Image
            source={{ uri: userPhoto }}
            size={100}
            style={{ marginBottom: 20 }}
          />
          <Text variant="headlineMedium" style={{ marginBottom: 10 }}>
            {userName}'s Profile
          </Text>
          <Text variant="bodyLarge" style={{ marginBottom: 20 }}>
            Email: {userEmail}
          </Text>
          <Link href="/home" push asChild>
            <Button title="Back to Home" />
          </Link>
        </Card.Content>
      </Card>
    </View>
  );
}
