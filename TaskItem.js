import React from 'react';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const TaskItem = ({ item, onDelete }) => (
  <Card style={styles.card}>
    <Card.Content>
      <Title>{item.title}</Title>
      <Paragraph>{item.body || 'Tidak ada deskripsi'}</Paragraph>
    </Card.Content>
    <Card.Actions>
      <Button onPress={() => onDelete(item.id)}>Selesai</Button>
    </Card.Actions>
  </Card>
);

const styles = StyleSheet.create({
  card: { marginBottom: 12, backgroundColor: 'white', elevation: 2 },
});

export default TaskItem;