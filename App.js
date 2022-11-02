import { NavigationContainer } from '@react-navigation/native';
import {Text, View } from 'react-native';
import ProductContainer from './Screens/Products/ProductContainer';
import {Box, NativeBaseProvider } from 'native-base';
import Header from './Shared/Header';
import Auth from './Context/store/Auth';
import Main from './Navigators/Main';
import { Provider } from 'react-redux';
import store from './Redux/store';



export default function App() {
  return (
    <Auth>
        <Provider store={store}>
      <NavigationContainer>
            <NativeBaseProvider>
                  {/* <Box flex={1} bg="#fff" alignItems="center" justifyContent="center"> */}
                      <Header/>
                      <Main/>
                  {/* </Box>                  */}
                </NativeBaseProvider>  
          </NavigationContainer>
    </Provider>
  </Auth>
    
    
   
  );
}

