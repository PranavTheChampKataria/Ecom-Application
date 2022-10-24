import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// local imports
// import AuthState from './Context/AuthState';
import Signup from './screens/Signup';
import Signin from './screens/Signin';
import Home from './screens/Home';



export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      {/* <AuthState> */}
        <Stack.Navigator initialRouteName="home">
          <Stack.Screen name="signin" component={Signin} options={{ headerShown: false }} />
          <Stack.Screen name="home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="signup" component={Signup} options={{ headerShown: false }} />
        </Stack.Navigator>
      {/* </AuthState> */}
    </NavigationContainer>
  );
}
