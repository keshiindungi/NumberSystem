import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Text, TextInput, Button, Card, SegmentedButtons } from 'react-native-paper';

// Simple conversion functions
const convertNumber = (value, fromBase, toBase) => {
  const decimal = parseInt(value, fromBase);
  return decimal.toString(toBase).toUpperCase();
};

const validateInput = (value, base) => {
  const patterns = {
    2: /^[01]+$/,
    8: /^[0-7]+$/,
    10: /^[0-9]+$/,
    16: /^[0-9A-Fa-f]+$/
  };
  return patterns[base].test(value);
};

const getBaseName = (base) => {
  const names = { 2: 'Binary', 8: 'Octal', 10: 'Decimal', 16: 'Hexadecimal' };
  return names[base];
};

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [fromBase, setFromBase] = useState('10');
  const [toBase, setToBase] = useState('2');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleConvert = () => {
    setError('');
    setResult('');
    
    if (!inputValue.trim()) {
      setError('Please enter a number');
      return;
    }

    if (!validateInput(inputValue, parseInt(fromBase))) {
      setError(`Invalid ${getBaseName(parseInt(fromBase))} number`);
      return;
    }

    try {
      const converted = convertNumber(inputValue, parseInt(fromBase), parseInt(toBase));
      setResult(converted);
    } catch (err) {
      setError('Conversion failed. Please check your input.');
    }
  };

  const clearAll = () => {
    setInputValue('');
    setResult('');
    setError('');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.title}>Number System Converter</Text>
            <Text style={styles.subtitle}>Convert between Binary, Octal, Decimal, and Hexadecimal</Text>

            <TextInput
              label={`Enter ${getBaseName(parseInt(fromBase))} number`}
              value={inputValue}
              onChangeText={setInputValue}
              style={styles.input}
              mode="outlined"
            />

            <Text style={styles.sectionTitle}>Convert From:</Text>
            <SegmentedButtons
              value={fromBase}
              onValueChange={setFromBase}
              buttons={[
                { value: '2', label: 'Binary' },
                { value: '8', label: 'Octal' },
                { value: '10', label: 'Decimal' },
                { value: '16', label: 'Hex' },
              ]}
            />

            <Text style={styles.sectionTitle}>Convert To:</Text>
            <SegmentedButtons
              value={toBase}
              onValueChange={setToBase}
              buttons={[
                { value: '2', label: 'Binary' },
                { value: '8', label: 'Octal' },
                { value: '10', label: 'Decimal' },
                { value: '16', label: 'Hex' },
              ]}
            />

            <View style={styles.buttonRow}>
              <Button 
                mode="outlined" 
                onPress={clearAll} 
                style={styles.button}
              >
                Clear
              </Button>
              <Button 
                mode="contained" 
                onPress={handleConvert} 
                style={styles.button}
              >
                Convert
              </Button>
            </View>

            {error ? (
              <Text style={styles.errorText}>{error}</Text>
            ) : null}

            {result ? (
              <View style={styles.resultContainer}>
                <Text style={styles.resultLabel}>Conversion Result:</Text>
                <Text style={styles.resultValue}>{result}</Text>
                <Text style={styles.resultDetails}>
                  {inputValue} ({getBaseName(parseInt(fromBase))}) → {result} ({getBaseName(parseInt(toBase))})
                </Text>
              </View>
            ) : null}
          </Card.Content>
        </Card>

        <Card style={styles.infoCard}>
          <Card.Content>
            <Text style={styles.infoTitle}>Test Examples:</Text>
            <Text style={styles.example}>• Binary to Decimal: 1101 → 13</Text>
            <Text style={styles.example}>• Decimal to Hex: 255 → FF</Text>
            <Text style={styles.example}>• Octal to Binary: 175 → 1111101</Text>
          </Card.Content>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
  infoCard: {
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#6200ee',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: 'gray',
    marginBottom: 20,
  },
  input: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    marginTop: 8,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
    gap: 8,
  },
  button: {
    flex: 1,
  },
  errorText: {
    color: '#d32f2f',
    textAlign: 'center',
    marginVertical: 8,
    fontSize: 14,
  },
  resultContainer: {
    backgroundColor: '#e8f5e8',
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
  },
  resultLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  resultValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2e7d32',
    textAlign: 'center',
    marginVertical: 8,
  },
  resultDetails: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  example: {
    fontSize: 14,
    marginBottom: 4,
  },
});