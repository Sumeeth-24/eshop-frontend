import React, {useContext} from 'react';
import {View, Dimensions,  StyleSheet} from 'react-native';
import {Container, Text, VStack, HStack, Box,  Center, Image} from 'native-base';
import  Icon  from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import * as actions from '../../Redux/Actions/cartActions';
import {SwipeListView}  from 'react-native-swipe-list-view';
import CartItem from './CartItem';
import EasyButton from '../../Shared/StyledComponents/EasyButton';
import AuthGlobal from '../../Context/store/AuthGlobal';

var {height, width} = Dimensions.get("window");

const Cart = (props) => {

    const context = useContext(AuthGlobal);

    var total = 0;
    props.cartItems.forEach(cart => {
        return (total += cart.product.price)
    });

  return (
   <>
    {props.cartItems.length ? (
        <Box flex={1} safeAreaTop bg="orange.100">
             <Center w="full" py={5}>
                <Text color="black" fontSize={20} bold>
                    Cart
                </Text>
            </Center>

            
            {props.cartItems.map((data) => {
                return (
                    <CartItem item={data}                   
                    />                                     
                )              
               })             
               }
          

                {/* <SwipeListView
                
                  data={props.cartItems}               
                
                 renderItem={(data) => {
                    <CartItem item={data} />
                 }}
                 
                  renderHiddenItem={(data) => (
                     <View style={styles.hiddenContainer}>
                         <TouchableOpacity style={styles.hiddenButton} onPress={() => props.removeFromCart(data.item)}>
                             <Icon name="trash" color={"white"} size={30} />
                         </TouchableOpacity>
                     </View>
                  )}
                  disableRighttSwipe={true}
                  previewOpenDelay={3000}
                  friction={1000}
                  tension={40}
                  leftOpenValue={75}
                  stopLefttSwipe={75}
                  rightOpenValue={75}
               />  */}
              
                
                

                <View style={styles.bottomContainer}>
                    <Text style={styles.price}>${total}</Text>
                    <EasyButton danger medium
                       onPress={() => props.clearCart()}
                     >
                        <Text style={{color: "white"}}>Clear</Text>
                     </EasyButton>

                    {/* {context.stateUser.isAuthenticated ? (
                        <EasyButton primary medium 
                        onPress={() => props.navigation.navigate('Checkout')} 
                      >
                           <Text style={{color: "white"}}>Checkout</Text>
                      </EasyButton>
                    ) : (
                        <EasyButton secondary medium 
                      onPress={() => props.navigation.navigate("Login")} 
                    >
                         <Text style={{color: "white"}}>Login</Text>
                    </EasyButton>
                    )} */}
                    <EasyButton primary medium 
                        onPress={() => props.navigation.navigate('Checkout')} 
                      >
                           <Text style={{color: "white"}}>Checkout</Text>
                      </EasyButton>
                    
                </View>
        </Box>
    ): (
        <Container style={styles.emptyContainer}>
            <Text>Looks like your cart is Empty</Text>
            <Text>Add products to your cart to get started</Text>
        </Container>
    )}
   </>
  )
}

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
    emptyContainer: {
        height: height / 2,
        marginLeft: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    bottomContainer: {
        marginTop: 300,
        flexDirection: 'row',
       
        bottom: 0,
        left: 0,
        backgroundColor: 'white',
        elevation: 20
    },
    price: {
        fontSize: 18,
        margin: 20,
        color: 'red'
    },
    hiddenContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        flexDirection: 'row'
    },
    hiddenButton: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 25,
        height: 70,
        width: 70
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
