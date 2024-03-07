import React from 'react'
import HomeSreen from '../screens/HomeSreen'
import DetailsScreen from '../screens/DetailsScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AppNavigator = () => {
    const Stack = createNativeStackNavigator(); // Inicializa o Stack Navigator
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeSreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  )
}

export default AppNavigator