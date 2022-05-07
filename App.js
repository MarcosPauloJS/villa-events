import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { darkTheme, lightTheme  } from './theme';

export default function App() {
  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>''
      <Text>vila events</Text>
    </ThemeProvider>
  );
}