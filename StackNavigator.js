import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomTabNavigation from './BottomTabNavigator';
import LoginPage from '../Screens/LoginPage';
import ChildLoginPage from '../Screens/ChildLoginPage';

const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen 
            name="LoginPage" 
            component={LoginPage} 
            options={{
                headerShown : false
            }}
        />
        <Stack.Screen 
            name="HomePage" 
            component={BottomTabNavigation} 
            options={{
                headerShown : false
            }}
        />

        <Stack.Screen 
            name="ChildLoginPage" 
            component={ChildLoginPage} 
            options={{
                headerShown : false
            }}
        />
         <Stack.Screen 
            name="RefreshHomePage" 
            component={BottomTabNavigation} 
            options={{
                headerShown : false
            }}
        />
        
    </Stack.Navigator>
  )
}

export default StackNavigation