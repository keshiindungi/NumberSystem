import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Text, Card } from 'react-native-paper';
import ConversionForm from '../Components/ConversionForm';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleLarge" style={styles.title}>
            Number System Converter
          </Text>
          <Text variant="bodyMedium" style={styles.subtitle}>
            Convert between Binary, Octal, Decimal, and Hexadecimal
          </Text>
          
          <View style={styles.formContainer}>
            <ConversionForm />
          </View>
        </Card.Content>
      </Card>
      
      <Card style={styles.infoCard}>
        <Card.Content>
          <Text variant="titleMedium">Supported Conversions:</Text>
          <Text variant="bodyMedium">• Binary ↔ Octal</Text>
          <Text variant="bodyMedium">• Binary ↔ Decimal</Text>
          <Text variant="bodyMedium">• Binary ↔ Hexadecimal</Text>
          <Text variant="bodyMedium">• Octal ↔ Decimal</Text>
          <Text variant="bodyMedium">• Octal ↔ Hexadecimal</Text>
          <Text variant="bodyMedium">• Decimal ↔ Hexadecimal</Text>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5'
  },
  card: {
    marginBottom: 16,
    elevation: 4
  },
  infoCard: {
    elevation: 2
  },
  title: {
    textAlign: 'center',
    marginBottom: 8,
    color: '#6200ee'
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 20,
    color: 'gray'
  },
  formContainer: {
    marginTop: 10
  }
});

export default HomeScreen;