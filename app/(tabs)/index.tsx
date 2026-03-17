import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { CustomTextInput, NIMInput } from "../../components/input.js";

export default function Index() {
  const [name, setName] = useState("");
  const [nim, setNim] = useState("");

  const handleChangeMyName = (value: string) => setName(value);
  const handleChangeMyNIM = (value: string) => setNim(value);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        {name || "Nama"} - {nim || "NIM"}
      </Text>

      <CustomTextInput input={name} onChange={handleChangeMyName} />

      <NIMInput input={nim} onChange={handleChangeMyNIM} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
