import React from "react";
import {Alert, Button, StyleSheet, Text, View} from "react-native";
import {supabase} from "./lib/supabase";

const index =() => {
    const addData =async () => {
        try {
            const {error} = await supabase.from("users").insert([
                {
                    first: "Alice",
                    last: "Smith",
                    birth: 1997
                },
            ])

            if (error) throw error;

            Alert.alert('Success', 'Data added successfully.')
        } catch (error: any) {
            Alert.alert('Error', error?.message ?? 'Failed to add data.')
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Supabase test</Text>
            <Button title="Add Data" onPress={addData} />
        </View>
    );
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: '#f5f7fb',
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 16,
        color: '#1f2937'
    },
})