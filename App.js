import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/Home'
import DailyPicScreen from './screens/DailyPic'
import StarMapScreen from './screens/StarMap'
import SpaceCraftScreen from './screens/SpaceCraft'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack' 


const Stack=createStackNavigator()

function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
       <Stack.Screen name="Home" component={HomeScreen}/>
       <Stack.Screen name="DailyPic" component={DailyPicScreen}/>
       <Stack.Screen name="SpaceCraft" component={SpaceCraftScreen}/>
       <Stack.Screen name="StarMap" component={StarMapScreen}/>
     </Stack.Navigator>
   </NavigationContainer>
  );
}

export default App;
