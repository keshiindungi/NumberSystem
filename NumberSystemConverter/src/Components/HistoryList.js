import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, IconButton, Divider, Button } from 'react-native-paper';
import CommonStyles, { Colors } from '../styles/common';
import { getBaseName } from '../utils/converters';

// Mock data - you'll replace this with actual data from AsyncStorage
const mockHistory = [
  {
    id: '1',
    input: '1101',
    fromBase: 2,
    toBase: 10,
    result: '13',
    timestamp: new Date('2024-01-15T10:30:00'),
  },
  {
    id: '2',
    input: '255',
    fromBase: 10,
    toBase: 16,
    result: 'FF',
    timestamp: new Date('2024-01-15T11:15:00'),
  },
  {
    id: '3',
    input: '175',
    fromBase: 8,
    toBase: 2,
    result: '1111101',
    timestamp: new Date('2024-01-15T12:00:00'),
  },
];

const HistoryList = ({ 
  history = mockHistory, 
  onClearHistory, 
  onDeleteItem, 
  onUseResult 
}) => {
  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const formatDate = (timestamp) => {
    return timestamp.toLocaleDateString();
  };

  if (history.length === 0) {
    return (
      <View style={[CommonStyles.center, styles.emptyContainer]}>
        <Text variant="titleMedium" style={styles.emptyTitle}>
          No Conversion History
        </Text>
        <Text variant="bodyMedium" style={styles.emptyText}>
          Your conversions will appear here
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={CommonStyles.flexBetween}>
        <Text variant="titleMedium" style={styles.historyTitle}>
          Conversion History ({history.length})
        </Text>
        <Button 
          mode="outlined" 
          onPress={onClearHistory}
          textColor={Colors.error}
          icon="delete-sweep"
        >
          Clear All
        </Button>
      </View>

      <Divider style={CommonStyles.divider} />

      <ScrollView style={styles.scrollView}>
        {history.map((item, index) => (
          <Card key={item.id} style={[CommonStyles.card, styles.historyItem]}>
            <Card.Content>
              <View style={CommonStyles.flexBetween}>
                <View style={styles.conversionInfo}>
                  <View style={styles.conversionRow}>
                    <Text style={styles.inputValue}>{item.input}</Text>
                    <Text style={styles.baseLabel}>
                      ({getBaseName(item.fromBase)})
                    </Text>
                    <Text style={styles.arrow}>→</Text>
                    <Text style={styles.resultValue}>{item.result}</Text>
                    <Text style={styles.baseLabel}>
                      ({getBaseName(item.toBase)})
                    </Text>
                  </View>
                  <Text style={styles.timestamp}>
                    {formatDate(item.timestamp)} at {formatTime(item.timestamp)}
                  </Text>
                </View>
                
                <View style={styles.actions}>
                  <IconButton
                    icon="content-copy"
                    size={18}
                    onPress={() => onUseResult?.(item)}
                    iconColor={Colors.primary}
                  />
                  <IconButton
                    icon="delete"
                    size={18}
                    onPress={() => onDeleteItem?.(item.id)}
                    iconColor={Colors.error}
                  />
                </View>
              </View>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>

      <Text style={styles.footerText}>
        Pull down to refresh history
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  historyTitle: {
    color: Colors.primary,
    marginBottom: 8,
  },
  scrollView: {
    flex: 1,
  },
  historyItem: {
    marginBottom: 8,
  },
  conversionInfo: {
    flex: 1,
  },
  conversionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: 4,
  },
  inputValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.text,
    marginRight: 4,
  },
  resultValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.success,
    marginHorizontal: 4,
  },
  baseLabel: {
    fontSize: 10,
    color: Colors.textSecondary,
    fontStyle: 'italic',
  },
  arrow: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginHorizontal: 6,
  },
  timestamp: {
    fontSize: 11,
    color: Colors.textSecondary,
    fontStyle: 'italic',
  },
  actions: {
    flexDirection: 'row',
  },
  emptyContainer: {
    flex: 1,
    padding: 40,
  },
  emptyTitle: {
    color: Colors.textSecondary,
    marginBottom: 8,
    textAlign: 'center',
  },
  emptyText: {
    color: Colors.textSecondary,
    textAlign: 'center',
  },
  footerText: {
    textAlign: 'center',
    color: Colors.textSecondary,
    fontSize: 12,
    marginTop: 16,
    fontStyle: 'italic',
  }
});

export default HistoryList;