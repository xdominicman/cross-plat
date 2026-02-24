import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface iProfile {
  name: string;
  age: number;
}

const Profile = ({ name, age }: iProfile) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Halo nama ku, {name}!</Text>
      <Text style={styles.text}>Umur ku, {age} tahun</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
  },
});

export default Profile;