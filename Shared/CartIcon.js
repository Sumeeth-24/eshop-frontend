import React from 'react';
import { StyleSheet } from 'react-native';
import { Box, Text } from 'native-base';

import {connect} from 'react-redux';

const CartIcon = (props) => {
  return (
    <>
      {props.cartItems.length ? (
        <Box px={1} rounded="full" position="absolute" w={5} top={-13} left={2} bg="red.600">
            <Text style={styles.text}>{props.cartItems.length}</Text>
        </Box>
      ): null}
    </>
  )
}

const mapStateToProps = (state) => {
    const {cartItems} = state;
    return {
        cartItems: cartItems
    }
}

const styles = StyleSheet.create({
   
    text: {
        fontSize: 12,
        width: 100,
        fontWeight: 'bold'
    }
})

export default connect(mapStateToProps)(CartIcon);
