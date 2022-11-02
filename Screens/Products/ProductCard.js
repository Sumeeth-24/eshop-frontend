import React from 'react';
import { StyleSheet, View, Dimensions, Image, Text, Button } from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../../Redux/Actions/cartActions';
import EasyButton from '../../Shared/StyledComponents/EasyButton';

var {width} = Dimensions.get("window");

const ProductCard = (props) => {
    const {name, price, image, countInStock} = props;
  return (
    <View style={styles.container}>
        <Image style={styles.image}
          resizeMode="contain"
          alt={image}
          source={require('../../assets/no-image.png')} 
        //   source={{uri: image ? image : "https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png"}}
        />
        <View style={styles.card}/>
        <Text style={styles.title}>
                {name.length > 15 ? name.substring(0, 15 - 3)
                + '...' : name}
        </Text>
        <Text style={styles.price}>${price}</Text>

        {countInStock > 0 ? (
            <View style={{ marginBottom: 60}}>
                <EasyButton 
                  primary
                  medium
                onPress={() => {
                    props.addItemToCart(props)
                }}
             >
                <Text style={{color: "white"}}>Add</Text>
             </EasyButton>

            </View>
        ) : <Text style={{ marginTop: 20, color: "#000"}}>Currently Unavailable</Text>}
    </View>
  )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (product) => 
           dispatch(actions.addToCart({quantity: 1, product}))
    }
}

const styles = StyleSheet.create({
    container: {
        width: width / 2 - 40,
        height: width / 1.7,
        padding: 10,
        borderRadius: 10,
        marginTop: 55,
        marginBottom: 5,
        marginLeft: 10,
        alignItems: 'center',
        elevation: 8,
        backgroundColor: 'white'
    },
    image: {
        width: width / 2 - 20 - 10,
        height: width / 2 - 20 - 30,
        backgroundColor: 'transparent',
        position: 'absolute',
        top: -45
    },
    card: {
        marginBottom: 10,
        height: width / 2 - 20 - 90,
        backgroundColor: 'transparent',
        width: width / 2 - 20 - 10
    },
    title: {
        fontWeight: "bold",
        fontSize: 14,
        textAlign: "center"
    },
    price: {
        fontSize: 20,
        color: 'orange',
        marginTop: 10
    }
})

export default connect(null, mapDispatchToProps)(ProductCard);
