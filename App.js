import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/Login';
import Navigation from './src/navigation';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login">
        <Stack.Screen component={Login} name="Login" />
        <Stack.Screen component={Navigation} name="Navigation" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;