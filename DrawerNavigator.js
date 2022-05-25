import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import CustomDrawer from './CustomDrawer';
import ProfileScreen from '../Screens/ProfileScreen';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props}/>}
    >
        <Drawer.Screen
            name="DrawerProfile"
            component={ProfileScreen}
            options={{
                headerShown:false
            }}
        />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator