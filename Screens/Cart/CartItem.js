import React, {useState} from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import {Text, VStack, HStack, Image, Box } from 'native-base';
import Icon from "react-native-vector-icons/AntDesign";
import {connect} from 'react-redux';
import * as actions from '../../Redux/Actions/cartActions';
import {SwipeListView}  from 'react-native-swipe-list-view';



const CartItem = (props) => {
    const data = props.item;
    const [quantity, setQuantity] = useState(props.item.quantity);

  return (
                        <VStack
                            style={styles.listItem}
                            key={Math.random()}
                        >
                            <HStack>
                              <Image size="12" 
                               alt={data.product.image}
                                  source={{                                 
                                    uri: data.product.image 
                                    ? data.product.image
                                    : "https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_968_720.png"}}
                               
                             />
                            </HStack>
                            <Box style={styles.body}>
                                <HStack space={3} justifyContent="center">
                                    <Text>{data.product.name}</Text>
                                    <Text>${data.product.price}</Text>
                                    <TouchableOpacity  onPress={() => props.removeFromCart(data)}>
                                            <Icon name="delete" color={"red"} size={30} />
                                     </TouchableOpacity>                                   
                                </HStack>                              
                            </Box>
                        </VStack>
  );
};

const mapStateToProps = (state) => {
    const {cartItems} = state;
    return {
        cartItems: cartItems,
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        clearCart: () => dispatch(actions.clearCart()),
        removeFromCart: (item) => dispatch(actions.removeFromCart(item))
    }
}

const styles = StyleSheet.create({
    listItem: {
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center'
    },
    body: {
        margin: 10,
        alignItems: 'center',
        flexDirection: 'row'
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(CartItem)
//export default CartItem;
