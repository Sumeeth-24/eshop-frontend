import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductContainer from '../Screens/Products/ProductContainer';
import SingleProduct from '../Screens/Products/SingleProduct';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
   <Stack.Navigator>
         <Stack.Screen
            name='Home'
            component={ProductContainer}
            options={{
                headerShown: false
            }}
         />
          <Stack.Screen
            name='Product Detail'
            component={SingleProduct}
            options={{
                headerShown: false
            }}
         />
   </Stack.Navigator>
  )
}

export default function HomeNavigator() {
    return <MyStack />
};
