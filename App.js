import { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import Counter from './counter';
import Profile from './profile';

export default function App() {
  const [count, setCount] = useState(0);
  const [inputName, setInputName] = useState("");
  
  const [displayName, setDisplayName] = useState("Anonymous");
  const [displayAge, setDisplayAge] = useState(0);

  const handleIncrement = () => { setCount(count + 1); };
  const handleDecrement = () => { setCount(count - 1); };

  const handlePassValue = () => {
    setDisplayName(inputName || "Anonymous");
    setDisplayAge(count);
  };

  return (
    <View style={styles.container}>
      <Profile name={displayName} age={displayAge} />

      <Counter 
        value={count} 
        handleIncrement={handleIncrement} 
        handleDecrement={handleDecrement}
        handlePassValue={handlePassValue}
      />

      <TextInput
        style={styles.input}
        placeholder="Input your name here"
        onChangeText={(text) => setInputName(text)}
        value={inputName}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    paddingHorizontal: 10,
  },
});