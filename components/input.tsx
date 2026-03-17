import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

// Definisi tipe untuk props yang diterima komponen [cite: 779-786]
interface CustomProps {
  onChange: (val: string) => void;
  input: string;
}

export const CustomTextInput = ({ input, onChange }: CustomProps) => {
  return (
    <View style={styles.inputContainer}>
      <Text>Name</Text>
      <TextInput
        placeholder="Input your name"
        style={styles.textInput}
        value={input}
        onChangeText={onChange}
      />
    </View>
  );
};

export const NIMInput = ({ input, onChange }: CustomProps) => {
  return (
    <View style={[styles.inputContainer, { width: 200 }]}>
      <Text>NIM</Text>
      <TextInput
        placeholder="Input your NIM/Student ID"
        style={styles.textInput}
        value={input}
        onChangeText={onChange}
        keyboardType="numeric"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 10,
  },
  textInput: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
});
