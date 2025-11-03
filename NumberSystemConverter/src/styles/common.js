import { StyleSheet } from 'react-native';

export const Colors = {
  primary: '#6200ee',
  primaryDark: '#3700b3',
  primaryLight: '#bb86fc',
  secondary: '#03dac6',
  error: '#b00020',
  background: '#f5f5f5',
  surface: '#ffffff',
  text: '#000000',
  textSecondary: '#666666',
  border: '#dddddd',
  success: '#4caf50',
  warning: '#ff9800'
};

export const Typography = {
  titleLarge: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.text,
  },
  titleMedium: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.text,
  },
  titleSmall: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
  },
  bodyLarge: {
    fontSize: 16,
    color: Colors.text,
  },
  bodyMedium: {
    fontSize: 14,
    color: Colors.text,
  },
  bodySmall: {
    fontSize: 12,
    color: Colors.textSecondary,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.text,
    marginBottom: 4,
  }
};

const CommonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 16,
  },
  card: {
    backgroundColor: Colors.surface,
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  input: {
    backgroundColor: Colors.surface,
    marginBottom: 16,
  },
  button: {
    borderRadius: 8,
    paddingVertical: 8,
    marginVertical: 8,
  },
  buttonPrimary: {
    backgroundColor: Colors.primary,
  },
  buttonSecondary: {
    backgroundColor: Colors.secondary,
  },
  buttonOutlined: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  segmentedButtons: {
    marginBottom: 16,
  },
  resultContainer: {
    backgroundColor: '#e8f5e8',
    borderLeftWidth: 4,
    borderLeftColor: Colors.success,
    padding: 16,
    borderRadius: 4,
    marginTop: 16,
  },
  errorContainer: {
    backgroundColor: '#ffebee',
    borderLeftWidth: 4,
    borderLeftColor: Colors.error,
    padding: 16,
    borderRadius: 4,
    marginTop: 16,
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.success,
    textAlign: 'center',
  },
  errorText: {
    fontSize: 14,
    color: Colors.error,
    textAlign: 'center',
  },
  sectionTitle: {
    ...Typography.titleSmall,
    marginBottom: 8,
    marginTop: 16,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  spacer: {
    height: 16,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.border,
    marginVertical: 16,
  }
});

export default CommonStyles;