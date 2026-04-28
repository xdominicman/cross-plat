import { Camera } from "expo-camera";
import * as FileSystem from "expo-file-system";
import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";
import { useState } from "react";
import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";

/**
 * Pastikan anda sudah menginstal library berikut:
 * npx expo install expo-camera expo-media-library expo-image-picker expo-file-system
 * * Dan tambahkan plugin pada app.json sesuai Modul 9:
 * "plugins": [
 * "expo-camera",
 * "expo-media-library"
 * ]
 */

export default function Index() {
  const [image, setImage] = useState<string | null>(null);

  const openCamera = async () => {
    const permission = await Camera.requestCameraPermissionsAsync();
    if (!permission.granted) {
      Alert.alert("Permission Required", "Camera permission is required!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const openGallery = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      Alert.alert("Permission Required", "Gallery permission is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const saveImage = async () => {
    if (!image) {
      Alert.alert("Error", "No image selected to save.");
      return;
    }

    // Meminta izin akses ke Media Library untuk menyimpan ke Gallery
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission Required",
        "Need permission to save images to gallery.",
      );
      return;
    }

    try {
      // Menggunakan FileSystem untuk memverifikasi keberadaan file (Sesuai instruksi TUGAS)
      const fileInfo = await FileSystem.getInfoAsync(image);

      if (fileInfo.exists) {
        // Menyimpan asset ke Gallery menggunakan MediaLibrary
        const asset = await MediaLibrary.createAssetAsync(image);

        // Membuat album khusus atau langsung simpan ke folder default gallery
        await MediaLibrary.createAlbumAsync("RecycleApp", asset, false);

        Alert.alert(
          "Success",
          "Image has been successfully saved to your gallery!",
        );
      } else {
        Alert.alert("Error", "File does not exist on the temporary path.");
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "An error occurred while saving the image.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Darryl - [NIM]</Text>

      <View style={styles.button}>
        <Button title="OPEN CAMERA" onPress={openCamera} />
      </View>

      <View style={styles.button}>
        <Button title="OPEN GALLERY" onPress={openGallery} />
      </View>

      {image && (
        <View style={styles.previewContainer}>
          <Image source={{ uri: image }} style={styles.image} />
          <View style={styles.button}>
            <Button title="SAVE IMAGE" color="#2ecc71" onPress={saveImage} />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  button: {
    marginVertical: 8,
    width: 220,
  },
  previewContainer: {
    alignItems: "center",
    marginTop: 20,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 15,
    elevation: 3,
  },
  image: {
    width: 280,
    height: 220,
    borderRadius: 10,
    marginBottom: 10,
  },
});
