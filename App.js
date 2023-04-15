import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
import Experiencia from './src/pages/Experiencia';
import Dados from './src/pages/Dados';
import Objetivo from './src/pages/Objetivo';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Sobre' component={Sobre}/>
        <Stack.Screen name='Experiencia' component={Experiencia}/>
        <Stack.Screen name='Dados' component={Dados}/>
        <Stack.Screen name='Objetivo' component={Objetivo}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}