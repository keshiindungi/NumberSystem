export const convertNumber = (value, fromBase, toBase) => {
  if (!value || value.trim() === '') {
    throw new Error('Please enter a number to convert');
  }
  
  const cleanValue = value.trim().toUpperCase();
  
  try {
    const decimal = parseInt(cleanValue, fromBase);
    
    if (isNaN(decimal)) {
      throw new Error('Invalid input for the selected number system');
    }
    
    const result = decimal.toString(toBase).toUpperCase();
    
    if (!result || result === 'NAN') {
      throw new Error('Conversion produced an invalid result');
    }
    
    return result;
  } catch (error) {
    throw new Error(`Conversion error: ${error.message}`);
  }
};

export const validateInput = (value, base) => {
  if (!value || value.trim() === '') return false;
  
  const cleanValue = value.trim().toUpperCase();
  
  const validChars = {
    2: /^[01]+$/,
    8: /^[0-7]+$/,
    10: /^[0-9]+$/,
    16: /^[0-9A-F]+$/
  };
  
  return validChars[base].test(cleanValue);
};

export const getBaseName = (base) => {
  const names = {
    2: 'Binary',
    8: 'Octal', 
    10: 'Decimal',
    16: 'Hexadecimal'
  };
  return names[base] || `Base ${base}`;
};

export const numberSystems = [
  { label: 'Binary (2)', value: 2 },
  { label: 'Octal (8)', value: 8 },
  { label: 'Decimal (10)', value: 10 },
  { label: 'Hexadecimal (16)', value: 16 }
];