import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { getComments, getPostDetail, getUserDetail } from "../services/api";

export default function PostDetail() {
  const { id, userId } = useLocalSearchParams<{ id: string; userId: string }>();
  const [post, setPost] = useState<any>(null);
  const [user, setUser] = useState<any>(null);
  const [comments, setComments] = useState<any[]>([]);

  useEffect(() => {
    getPostDetail(Number(id)).then((res) => setPost(res.data));
    getUserDetail(Number(userId)).then((res) => setUser(res.data));
    getComments(Number(id)).then((res) => setComments(res.data));
  }, [id]);

  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>{post?.title}</Text>
      <Text style={{ marginVertical: 10 }}>{post?.body}</Text>
      <Text style={{ fontWeight: "bold" }}>Author: {user?.name}</Text>

      <Text style={{ marginTop: 20, fontWeight: "bold" }}>Comments:</Text>
      {comments.map((c) => (
        <View key={c.id} style={{ borderBottomWidth: 1, paddingVertical: 10 }}>
          <Text style={{ color: "blue" }}>{c.email}</Text>
          <Text>{c.body}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
