import { Image, ScrollView, Text } from "react-native";
import styles from "./styles.js";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>Darryl Cornelius Setiawan - 00000098874</Text>
      <Image
        style={styles.image}
        source={require("../assets/people/reynard.jpeg")}
      />
      <Text style={styles.text}>Reynard paling chill</Text>
      <Image
        style={styles.image}
        source={require("../assets/people/aless.jpeg")}
      />
      <Text style={styles.text}>Aless the sigma</Text>
      <Image
        style={styles.image}
        source={require("../assets/people/nivad.jpeg")}
      />
      <Text style={styles.text}>Nivad si pemakan</Text>
      <Image
        style={styles.image}
        source={require("../assets/people/susilo dan pacar.jpeg")}
      />
      <Text style={styles.text}>Happy couple</Text>
    </ScrollView>
  );
}
