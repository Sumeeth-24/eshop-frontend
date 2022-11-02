import { HStack, Input } from 'native-base';
import React from 'react';
import { Text } from 'react-native';
import  Icon  from 'react-native-vector-icons/FontAwesome';



const HomeSearched = () => {
  return (
    <HStack space={3} w="full" px={2} py={4} alignItems="center" safeAreaTop>
        <Input 
             placeholder='Search...'
              w="85%"
              bg="white" 
              type='search'
              variant="filled"
              h={10}
              borderWidth={0}
             
        />
         <Icon  name="search" size={30} />
    </HStack>
  )
}

export default HomeSearched

{/* <VStack w="100%" space={5} alignSelf="center">                   
                <Input placeholder="Search" 
                    variant="filled" width="100%"
                    borderRadius="10" py="1" px="2"
                    onFocus={openList}
                    onChangeText={(text) => searchProduct(text)}
                />  
                 {focus == true ? (
                    <Icon onPress={onBlur} name="ios-close" />
                ) : null}
           </VStack> */}