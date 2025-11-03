import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Card } from 'react-native-paper';
import HistoryScreen from '../../src/screens/HistoryScreen';

export default function HistoryTab() {
  return (
    <View style={styles.container}>
      <HistoryScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  }
});