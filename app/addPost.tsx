import { router } from "expo-router";
import { useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";
import { postData } from "../services/api";

export default function AddPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = () => {
    postData({ title, body, userId: 1 }).then((res) => {
      if (res.status === 201) {
        Alert.alert("Sukses", "Post berhasil dibuat!");
        router.back();
      }
    });
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Title"
        onChangeText={setTitle}
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />
      <TextInput
        placeholder="Body"
        onChangeText={setBody}
        style={{ borderWidth: 1, marginBottom: 20, padding: 8, height: 100 }}
      />
      <Pressable
        onPress={handleSubmit}
        style={{ backgroundColor: "green", padding: 15 }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>Submit</Text>
      </Pressable>
    </View>
  );
}
