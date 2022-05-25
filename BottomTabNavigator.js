import * as React from 'react';
import { Text, View, Image, StyleSheet, Animated } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import MainPage from '../containers/MainPage/MainPage'
//import TransactionHistory from '../containers/Transactions/TransactionHistory';
import HomePage from '../Screens/HomePage';
import HomeIcon from 'react-native-vector-icons/Entypo'
import ChatIcon from 'react-native-vector-icons/Ionicons'
import { dimension, dimensionVertical } from '../PixelScaling';
import Drusya from '../assets/Drusya.jpeg'
import ProfileScreen from '../Screens/ProfileScreen';
import ChatScreen from '../Screens/ChatScreen';
import ReelsScreen from '../Screens/ReelsScreen';
import NotificationScreen from '../Screens/NotificationScreen';
import DrawerNavigator from './DrawerNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      // screenOptions={{
      //   headerShown : false,
      //   tabBarShowLabel : false,
      //   tabBarStyle : {
      //     position : 'absolute',
      //     bottom : dimension(25),
      //     left : dimension(20),
      //     right : dimension(20),
      //     elevation : 0,
      //     backgroundColor : 'black',
      //     borderRadius : dimension(10),
      //     height : dimensionVertical(90),
      //     borderColor : 'white',
      //     borderWidth : 1,
      //   }
      // }}
      screenOptions={{
        tabBarShowLabel : false,
        tabBarStyle : {
          backgroundColor : 'black',
          borderTopColor : 'grey',
          borderTopWidth : 0.4,
          position : 'absolute',
          height : dimensionVertical(60),
          alignItems : 'center',
          justifyContent : 'center'
        }
      }}
    >
        <Tab.Screen 
          name="MainPage" 
          component={HomePage} 
          options={{
            headerShown : false,
            tabBarInactiveBackgroundColor : 'black',
            tabBarActiveBackgroundColor : 'black',
            tabBarActiveTintColor : 'white',
            tabBarInactiveTintColor : 'grey',
            tabBarIcon : ({focused}) => {
              return(
                <HomeIcon name="home" size={focused ? dimension(30) : dimension(25)} color={focused ?  'white' : 'grey'}/>
              )
            }
          }}
        />
        <Tab.Screen 
          name="ChatScreen" 
          component={ChatScreen} 
          options={{
            headerShown : false,
            tabBarInactiveBackgroundColor : 'black',
            tabBarActiveBackgroundColor : 'black',
            tabBarActiveTintColor : 'white',
            tabBarInactiveTintColor : 'gray',
            tabBarIcon : ({focused}) => {
              return(
                <ChatIcon name="chatbubble-sharp" size={focused ? dimension(30) : dimension(25)} color={focused ?  'white' : 'grey'}/>
              )
            }
          }}
        />
        <Tab.Screen 
          name="ReelsScreen" 
          component={ReelsScreen} 
          options={{
            headerShown : false,
            tabBarInactiveBackgroundColor : 'black',
            tabBarActiveBackgroundColor : 'black',
            tabBarActiveTintColor : 'white',
            tabBarInactiveTintColor : 'gray',
            tabBarIcon : ({focused}) => {
              return(
                <HomeIcon name="video" size={focused ? dimension(30) : dimension(25)} color={focused ?  'white' : 'grey'}/>
              )
            }
          }}
        />
        <Tab.Screen 
          name="NotificationsScreen" 
          component={NotificationScreen} 
          options={{
            headerShown : false,
            tabBarInactiveBackgroundColor : 'black',
            tabBarActiveBackgroundColor : 'black',
            tabBarActiveTintColor : 'white',
            tabBarInactiveTintColor : 'gray',
            tabBarIcon : ({focused}) => {
              return(
                <ChatIcon name="notifications" size={focused ? dimension(30) : dimension(25)} color={focused ?  'white' : 'grey'}/>
              )
            }
          }}
        />
        <Tab.Screen 
          name="ProfileScreen" 
          component={DrawerNavigator} 
          options={{
            headerShown : false,
            tabBarInactiveBackgroundColor : 'black',
            tabBarActiveBackgroundColor : 'black',
            tabBarActiveTintColor : 'white',
            tabBarInactiveTintColor : 'gray',
            tabBarIcon : ({focused}) => {
              return(
                <View>
                {focused ?  <Image 
                    source={Drusya}
                    style={{width:dimension(30),height:dimension(30), borderRadius:dimension(50),borderWidth:1,borderColor:'#fff'}}
                  /> : 
                  <Image 
                    source={Drusya}
                    style={{width:dimension(30),height:dimension(30), borderRadius:dimension(50),borderWidth:1,borderColor:'grey'}}
                  /> }
                </View>
              )
            }
          }}
        />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  shadow : {
    shadowColor : '#fff',
    shadowOffset : {
      width : 0,
      height : 10,
    },
    shadowOpacity : 0.25,
    shadowRadius : 3.5,
    elevation : 5
  }
})

export default BottomTabNavigation