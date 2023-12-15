// ThemeContext.js
import React from 'react';

export const lightTheme = {
  primaryColor: '#007bff',
  secondaryColor: '#6c757d',
  backgroundColor: '#f8f9fa',
  textColor: '#343a40',
};

export const darkTheme = {
  primaryColor: '#64b5f6',
  secondaryColor: '#b0bec5',
  backgroundColor: '#212529', 
  textColor: '#f8f9fa',
};

export const ThemeContext = React.createContext(lightTheme);
