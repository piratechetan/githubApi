import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  
  StatusBar,Image, Text
} from 'react-native';
import Login from './Src/components/login';

import User from './Src/components/user';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
<Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Login}  options={{headerShown:false}}/>
        <Stack.Screen name="User" component={User} />
      </Stack.Navigator>

    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
