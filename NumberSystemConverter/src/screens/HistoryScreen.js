import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import { Text, Card, Button } from 'react-native-paper';
import CommonStyles, { Colors } from '../styles/common';
import HistoryList from '../Components/HistoryList';

const HistoryScreen = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load history from storage (you'll implement AsyncStorage later)
  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = async () => {
    try {
      // TODO: Replace with actual AsyncStorage implementation
      setLoading(false);
    } catch (error) {
      console.error('Failed to load history:', error);
      setLoading(false);
    }
  };

  const handleClearHistory = () => {
    Alert.alert(
      'Clear History',
      'Are you sure you want to clear all conversion history?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Clear All', 
          style: 'destructive',
          onPress: () => {
            setHistory([]);
            // TODO: Clear from AsyncStorage
          }
        }
      ]
    );
  };

  const handleDeleteItem = (itemId) => {
    setHistory(prev => prev.filter(item => item.id !== itemId));
    // TODO: Delete from AsyncStorage
  };

  const handleUseResult = (item) => {
    Alert.alert(
      'Use Result',
      `Do you want to use "${item.result}" for a new conversion?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Use Result', 
          onPress: () => {
            // TODO: Navigate to converter with this result as input
            console.log('Using result:', item.result);
          }
        }
      ]
    );
  };

  if (loading) {
    return (
      <View style={[CommonStyles.container, CommonStyles.center]}>
        <Text>Loading history...</Text>
      </View>
    );
  }

  return (
    <View style={CommonStyles.container}>
      <Card style={CommonStyles.card}>
        <Card.Content>
          <Text variant="titleLarge" style={styles.title}>
            Conversion History
          </Text>
          <Text variant="bodyMedium" style={styles.subtitle}>
            View and manage your previous conversions
          </Text>
        </Card.Content>
      </Card>

      <HistoryList
        history={history}
        onClearHistory={handleClearHistory}
        onDeleteItem={handleDeleteItem}
        onUseResult={handleUseResult}
      />

      {history.length === 0 && (
        <Card style={[CommonStyles.card, styles.infoCard]}>
          <Card.Content>
            <Text variant="bodyMedium" style={styles.infoText}>
              No conversion history yet. Your conversions will appear here after you use the converter.
            </Text>
            <Button 
              mode="contained" 
              style={styles.convertButton}
              icon="calculator"
              onPress={() => console.log('Navigate to converter')}
            >
              Go to Converter
            </Button>
          </Card.Content>
        </Card>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    color: Colors.primary,
    marginBottom: 4,
  },
  subtitle: {
    textAlign: 'center',
    color: Colors.textSecondary,
  },
  infoCard: {
    marginTop: 20,
    alignItems: 'center',
  },
  infoText: {
    textAlign: 'center',
    marginBottom: 16,
    color: Colors.textSecondary,
  },
  convertButton: {
    marginTop: 8,
  }
});

export default HistoryScreen;