import { Button, Text, View, StyleSheet } from "react-native";

interface iCounter {
  handleIncrement: () => void;
  handleDecrement: () => void;
  handlePassValue: () => void;
  value: number;
}

const Counter = ({ handleIncrement, handleDecrement, handlePassValue, value }: iCounter) => {
  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>{value}</Text>
      <View style={styles.buttonContainer}>
        <Button title="INCREMENT" onPress={handleIncrement} />
        <Button title="DECREMENT" onPress={handleDecrement} />
        <Button title="PASS VALUE" onPress={handlePassValue} /> 
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  counterText: {
    fontSize: 24,
    marginBottom: 10,
  },
  buttonContainer: {
    width: 200,
    gap: 10,
  },
});

export default Counter;