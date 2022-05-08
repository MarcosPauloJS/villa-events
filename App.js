import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/Home/index.js';
import { lightTheme  } from './theme';



export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <ThemeProvider theme={lightTheme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
     </NavigationContainer>
    </ThemeProvider>
  );
}