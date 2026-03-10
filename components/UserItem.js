import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card } from 'react-native-paper'; // Opsional: tetap pakai styles.card milikmu juga bisa
import styles from "../appStyles";

const UserItem = ({ user }) => {
    return (
        <View style={styles.card}>
            <Image
                source={{ uri: user["photo-url"] }}
                style={styles.avatar}
            />
            <View>
                <Text style={styles.boldText}>{user.name}</Text>
                <Text>{user.email}</Text>
            </View>
        </View>
    );
};

export default UserItem;