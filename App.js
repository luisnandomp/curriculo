import {  View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Sobre' component={Sobre}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}