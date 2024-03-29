import React from 'react'
import DetailsScreen from '../screens/DetailsScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';

const AppNavigator = () => {
    const Stack = createNativeStackNavigator(); // Inicializa o Stack Navigator
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  )
}

export default AppNavigator