import { router } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { getPosts } from "../services/api";

export default function Index() {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    getPosts().then((res) => setPosts(res.data));
  }, []);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Pressable
        onPress={() => router.push("../addPost")}
        style={{ backgroundColor: "blue", padding: 10, marginBottom: 10 }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>
          Add New Post
        </Text>
      </Pressable>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable
            onPress={() =>
              router.push({
                pathname: "../postDetail",
                params: { id: item.id, userId: item.userId },
              })
            }
            style={{ padding: 10, borderWidth: 1, marginVertical: 5 }}
          >
            <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
            <Text>{item.body}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}
