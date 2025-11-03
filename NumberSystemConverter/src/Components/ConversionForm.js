import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { TextInput, Button, SegmentedButtons, Text, Card } from 'react-native-paper';
import { convertNumber, validateInput, numberSystems, getBaseName } from '../utils/converters';

const ConversionForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [fromBase, setFromBase] = useState('10');
  const [toBase, setToBase] = useState('2');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const [isConverting, setIsConverting] = useState(false);

  const handleConvert = async () => {
    setError('');
    setResult('');
    
    if (!inputValue.trim()) {
      setError('Please enter a number to convert');
      return;
    }

    if (!validateInput(inputValue, parseInt(fromBase))) {
      const baseName = getBaseName(parseInt(fromBase));
      setError(`Invalid ${baseName} number format`);
      return;
    }

    setIsConverting(true);
    
    try {
      const converted = convertNumber(inputValue, parseInt(fromBase), parseInt(toBase));
      setResult(converted);
      
      console.log('Conversion saved:', {
        input: inputValue,
        fromBase: parseInt(fromBase),
        toBase: parseInt(toBase),
        result: converted,
        timestamp: new Date().toISOString()
      });
      
    } catch (err) {
      setError(err.message);
    } finally {
      setIsConverting(false);
    }
  };

  const clearAll = () => {
    setInputValue('');
    setResult('');
    setError('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        label={`Enter ${getBaseName(parseInt(fromBase))} number`}
        value={inputValue}
        onChangeText={setInputValue}
        style={styles.input}
        mode="outlined"
        placeholder={`e.g., ${fromBase === '2' ? '1101' : fromBase === '8' ? '175' : fromBase === '10' ? '123' : '1A3F'}`}
      />
      
      <Text variant="titleSmall" style={styles.sectionTitle}>Convert From:</Text>
      <SegmentedButtons
        value={fromBase}
        onValueChange={setFromBase}
        buttons={numberSystems.map(sys => ({
          value: sys.value.toString(),
          label: sys.label.split(' ')[0]
        }))}
        style={styles.segmentedButtons}
      />
      
      <Text variant="titleSmall" style={styles.sectionTitle}>Convert To:</Text>
      <SegmentedButtons
        value={toBase}
        onValueChange={setToBase}
        buttons={numberSystems.map(sys => ({
          value: sys.value.toString(),
          label: sys.label.split(' ')[0]
        }))}
        style={styles.segmentedButtons}
      />
      
      <View style={styles.buttonContainer}>
        <Button 
          mode="outlined" 
          onPress={clearAll}
          style={[styles.button, styles.clearButton]}
          disabled={isConverting}
        >
          Clear
        </Button>
        <Button 
          mode="contained" 
          onPress={handleConvert}
          style={styles.button}
          loading={isConverting}
          disabled={isConverting || !inputValue.trim()}
        >
          Convert
        </Button>
      </View>
      
      {error ? (
        <Card style={[styles.resultCard, styles.errorCard]}>
          <Card.Content>
            <Text style={styles.errorText}>Error: {error}</Text>
          </Card.Content>
        </Card>
      ) : null}
      
      {result ? (
        <Card style={[styles.resultCard, styles.successCard]}>
          <Card.Content>
            <Text style={styles.resultLabel}>Conversion Result:</Text>
            <Text style={styles.resultValue}>{result}</Text>
            <Text style={styles.resultDetails}>
              {inputValue} ({getBaseName(parseInt(fromBase))}) → {result} ({getBaseName(parseInt(toBase))})
            </Text>
          </Card.Content>
        </Card>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 8 },
  input: { marginBottom: 20 },
  sectionTitle: { marginBottom: 8, fontWeight: 'bold', color: '#333' },
  segmentedButtons: { marginBottom: 20 },
  buttonContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  button: { flex: 1, marginHorizontal: 4 },
  clearButton: { borderColor: '#6200ee' },
  resultCard: { marginTop: 10, padding: 8 },
  successCard: { backgroundColor: '#e8f5e8', borderColor: '#4caf50' },
  errorCard: { backgroundColor: '#ffebee', borderColor: '#f44336' },
  resultLabel: { fontSize: 14, color: '#666', marginBottom: 4 },
  resultValue: { fontSize: 24, fontWeight: 'bold', color: '#2e7d32', textAlign: 'center', marginVertical: 8 },
  resultDetails: { fontSize: 12, color: '#666', textAlign: 'center', fontStyle: 'italic' },
  errorText: { color: '#d32f2f', textAlign: 'center' }
});

export default ConversionForm;