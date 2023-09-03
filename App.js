import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/router/MainStack';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar style="auto" />
        <MainStack />
      </NavigationContainer>
    </Provider>
  );
}
