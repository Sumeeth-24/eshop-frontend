import React, {useState, useEffect} from 'react';
import {Image, View, StyleSheet, Text, ScrollView, Button} from 'react-native';
import {Container, VStack, HStack, Heading} from 'native-base'; 
import {connect} from 'react-redux';
import * as actions from '../../Redux/Actions/cartActions';
import EasyButton from '../../Shared/StyledComponents/EasyButton';
import TrafficLight from '../../Shared/StyledComponents/TrafficLight';

const SingleProduct = (props) => {
   

    const [item, setItem] = useState(props.route.params.item);
    const [availability, setAvailability] = useState(null);
    const [availabilityText, setAvailabilityText] = useState("");

    useEffect(() => {
        if(props.route.params.item.countInStock == 0){
            setAvailability(<TrafficLight unavailable></TrafficLight>);
            setAvailabilityText("Unavailable")
        }
        else if(props.route.params.item.countInStock <= 5){
            setAvailability(<TrafficLight limited></TrafficLight>);
            setAvailabilityText("Limited Stock")
        }
        else{
            setAvailability(<TrafficLight available></TrafficLight>);
            setAvailabilityText("Available")
        }

        return () => {
            setAvailability(null);
            setAvailabilityText("");
        }
    }, [])

  return (
    <Container style={styles.container} >
       <ScrollView style={{marginBottom: 80, padding: 5}}>
        <View>
            <Image 
             source={require('../../assets/no-image.png')} 
            //   source={{
               
            //   }}
              resizeMode="contain"
              style={styles.image}
            />
        </View>
        <View style={styles.contentContainer}>
            <Heading size='lg' style={styles.contentHeader}>{item.name}</Heading>
            <Text style={styles.contentText}>{item.brand}</Text>
        </View>
             <View style={styles.availabilityContainer}>
                <View style={styles.availability}>
                    <Text style={{marginRight: 10}}>
                        Availability: {availabilityText}
                    </Text>
                    {availability}
                </View>
                <Text>{item.description}</Text>
             </View>
       </ScrollView>

       <View style={styles.bottomContainer}>
       <HStack justifyContent="space-between">
            <Text style={styles.price}>{item.price}</Text>
            <EasyButton 
                primary
                medium
              onPress={() => props.addItemToCart(item)}
              >
                <Text style={{color: "white"}}>Add</Text>
              </EasyButton>
       </HStack>
       </View>
    </Container>
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
        position: 'relative',
        height: '100%'
    },
    imageContainer: {
        backgroundColor: 'white',
        padding: 0,
        margin: 0
    },
    image: {
        width: '100%',
        height: 250
    },
    contentContainer: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentHeader: {
        fontWeight:'bold',
        marginBottom: 20,
        marginLeft: 130
    },
    contentText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        marginLeft: 130
    },
    bottomContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: 'white'
    },
    price: {
        fontSize: 24,
        margin: 20,
        color: 'red'
    },
    availabilityContainer: {
        marginBottom: 20,
        alignItems: "center"
    },
    availability: {
        flexDirection: 'row',
        marginBottom: 10
    }

})

export default connect( null, mapDispatchToProps)(SingleProduct)

// <HStack justifyContent="space-between">
//     <Text>Nathaniel Clyne</Text>
//     <Icon name="arrow-forward" />
//   </HStack>

// <ListItem>
//     <Left>
//       <Text>Nathaniel Clyne</Text>
//     </Left>
//     <Right>
//       <Icon name="arrow-forward" />
//     </Right>
//   </ListItem>