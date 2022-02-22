import React from 'react';
import TodoScreen from './screens/TodoScreen';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Todo" component = {TodoScreen} />
      <Stack.Screen name="Screen1" component = {Screen1} />
      <Stack.Screen name="Screen2" component = {Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  )}



