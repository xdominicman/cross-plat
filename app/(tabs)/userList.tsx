import { Link } from "expo-router";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { Avatar, Card, Text } from "react-native-paper";
import styles from "../../AppStyles";
import userData from "../../data.json";

export default function userList() {
  return (
    <ScrollView style={styles.mainContainer}>
      <Text
        variant="headlineMedium"
        style={{ textAlign: "center", marginBottom: 20 }}
      >
        User List
      </Text>
      {userData.map((user, index) => (
        <Card key={index} style={styles.card}>
          <Link
            href={{
              pathname: "/profile",
              params: {
                userName: user.name,
                userEmail: user.email,
                userPhoto: user.photo_url,
              },
            }}
            push
            asChild
          >
            <TouchableOpacity>
              <Card.Content
                style={{ flexDirection: "row", alignItems: "center" }}
              >
                <Avatar.Image source={{ uri: user.photo_url }} size={60} />
                <View style={{ marginLeft: 15, flex: 1 }}>
                  <Text variant="titleMedium">{user.name}</Text>
                  <Text variant="bodyMedium">{user.email}</Text>
                </View>
              </Card.Content>
            </TouchableOpacity>
          </Link>
        </Card>
      ))}
    </ScrollView>
  );
}
