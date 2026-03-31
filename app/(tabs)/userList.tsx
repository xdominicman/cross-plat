import React from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import Animated, { FadeInLeft } from "react-native-reanimated";

const UserList = ({ users }) => {
  const renderItem = ({ item, index }) => {
    return (
      <Animated.View
        entering={FadeInLeft.delay(index * 200)}
        style={styles.userCard}
      >
        <Text style={styles.userName}>{item.name}</Text>
        <Text>{item.email}</Text>
      </Animated.View>
    );
  };

  return (
    <FlatList
      data={users}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 20,
  },
  userCard: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 3,
  },
  userName: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default UserList;
