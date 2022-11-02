import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from '../Screens/Cart/Cart';
import Login from '../Screens/User/Login';
import CheckoutNavigator from './CheckoutNavigator';
import UserProfile from '../Screens/User/UserProfile';
import Register from '../Screens/User/Register';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
   <Stack.Navigator>
         <Stack.Screen
            name='Cart'
            component={Cart}
            options={{
                headerShown: false
            }}
         />
         <Stack.Screen
            name='Checkout'
            component={CheckoutNavigator}
            options={{
                headerShown: false
            }}
         />
          {/* <Stack.Screen
            name='Login'
            component={Login}
            options={{
                headerShown: false
            }}
         />
          
          <Stack.Screen
            name='Register'
            component={Register}
            options={{
                headerShown: false
            }}
         />
          <Stack.Screen
            name='User Profile'
            component={UserProfile}
            options={{
                headerShown: false
            }}
         /> */}
   </Stack.Navigator>
  )
}

export default function CartNavigator() {
    return <MyStack />
};