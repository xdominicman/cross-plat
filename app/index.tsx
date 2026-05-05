import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { ActivityIndicator, Alert, StyleSheet, Text, View } from "react-native";
import type { LatLng, MapPressEvent, Region } from "react-native-maps";
import MapView, { Marker } from "react-native-maps";

const DEFAULT_DELTA = 0.01;

export default function Index() {
  const [coordinate, setCoordinate] = useState<LatLng | null>(null);
  const [region, setRegion] = useState<Region | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getCurrentLocation = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== "granted") {
          Alert.alert(
            "Permission Required",
            "Location permission is required to show your current location.",
          );
          return;
        }

        const currentLocation = await Location.getCurrentPositionAsync({});
        const currentCoordinate = {
          latitude: currentLocation.coords.latitude,
          longitude: currentLocation.coords.longitude,
        };

        setCoordinate(currentCoordinate);
        setRegion({
          ...currentCoordinate,
          latitudeDelta: DEFAULT_DELTA,
          longitudeDelta: DEFAULT_DELTA,
        });
      } catch (error) {
        console.log(error);
        Alert.alert(
          "Error",
          "An error occurred while getting your current location.",
        );
      } finally {
        setIsLoading(false);
      }
    };

    getCurrentLocation();
  }, []);

  const updateMarkerPosition = (newCoordinate: LatLng) => {
    setCoordinate(newCoordinate);
    setRegion((currentRegion) => ({
      latitude: newCoordinate.latitude,
      longitude: newCoordinate.longitude,
      latitudeDelta: currentRegion?.latitudeDelta ?? DEFAULT_DELTA,
      longitudeDelta: currentRegion?.longitudeDelta ?? DEFAULT_DELTA,
    }));
  };

  const handleMapPress = (event: MapPressEvent) => {
    updateMarkerPosition(event.nativeEvent.coordinate);
  };

  if (isLoading) {
    return (
      <View style={styles.centeredContainer}>
        <ActivityIndicator size="large" color="#2563eb" />
        <Text style={styles.loadingText}>Mengambil lokasi saat ini...</Text>
      </View>
    );
  }

  if (!coordinate || !region) {
    return (
      <View style={styles.centeredContainer}>
        <Text style={styles.errorText}>Lokasi tidak dapat ditampilkan.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={region}
        showsUserLocation
        showsMyLocationButton
        onPress={handleMapPress}
        onRegionChangeComplete={setRegion}
      >
        <Marker
          coordinate={coordinate}
          draggable
          title="Lokasi dipilih"
          description="Tap peta atau geser marker untuk mengubah posisi"
          onDragEnd={(event) =>
            updateMarkerPosition(event.nativeEvent.coordinate)
          }
        />
      </MapView>

      <View style={styles.infoPanel}>
        <Text style={styles.title}>Koordinat Marker</Text>
        <Text style={styles.coordinateText}>
          Latitude: {coordinate.latitude.toFixed(6)}
        </Text>
        <Text style={styles.coordinateText}>
          Longitude: {coordinate.longitude.toFixed(6)}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  centeredContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#f8fafc",
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: "#334155",
  },
  errorText: {
    fontSize: 16,
    color: "#dc2626",
    textAlign: "center",
  },
  map: {
    flex: 1,
  },
  infoPanel: {
    position: "absolute",
    left: 16,
    right: 16,
    bottom: 24,
    padding: 16,
    borderRadius: 8,
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.18,
    shadowRadius: 4,
    elevation: 4,
  },
  title: {
    marginBottom: 8,
    fontSize: 18,
    fontWeight: "700",
    color: "#0f172a",
  },
  coordinateText: {
    fontSize: 16,
    color: "#1e293b",
  },
});
