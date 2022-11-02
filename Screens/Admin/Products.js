import React, {useState, useCallback} from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, Dimensions, Button } from 'react-native';
import {Input} from 'native-base';
import Icon  from 'react-native-vector-icons/FontAwesome';
import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';
import baseURL from '../../assets/common/baseUrl';
import ListItem from './ListItem';
import { AsyncStorage } from 'react-native';
import EasyButton from '../../Shared/StyledComponents/EasyButton';

var {height, width} = Dimensions.get("window");

const ListHeader = () => {
  return(
    <View elevation={1} style={styles.listHeader}
    >
       {/* <View style={styles.headerItem}></View> */}
       <View style={styles.headerItem}>
          <Text style={{ fontWeight: '600'}}>Brand</Text>
       </View>
       <View style={styles.headerItem}>
          <Text style={{ fontWeight: '600'}}>Name</Text>
       </View>
       {/* <View style={styles.headerItem}>
          <Text style={{ fontWeight: '600'}}>Category</Text>
       </View> */}
       <View style={styles.headerItem}>
          <Text style={{ fontWeight: '600'}}>Price</Text>
       </View>
    </View>
  )
}

const Products = (props) => {
    const [productList, setProductList] = useState();
    const [productFilter, setProductFilter] = useState();
    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState();

    useFocusEffect(
        useCallback(
            () => {
                AsyncStorage.getItem("jwt")
                 .then((res) => {
                    setToken(res)
                 })
                 .catch((error) => console.log(error))

                axios
                  .get(`${baseURL}products`)
                  .then((res) => {
                    setProductList(res.data);
                    setProductFilter(res.data);
                    setLoading(false);
                  })

                  return () => {
                    setProductList();
                    setProductFilter();
                    setLoading(true)
                  }
            },
            [],
        )
    )

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <EasyButton
            secondary
            medium
            onPress={() => props.navigation.navigate("Orders")}
        >
            <Icon nam="shopping-bag" size={18} color="white" />
            <Text style={styles.buttonText}>Orders</Text>
        </EasyButton>
        <EasyButton
            secondary
            medium
            onPress={() => props.navigation.navigate("ProductForm")}
        >
            <Icon nam="plus" size={18} color="white" />
            <Text style={styles.buttonText}>Products</Text>
        </EasyButton>
        <EasyButton
            secondary
            medium
            onPress={() => props.navigation.navigate("Categories")}
        >
            <Icon nam="plus" size={18} color="white" />
            <Text style={styles.buttonText}>Categories</Text>
        </EasyButton>
      </View>
        {/* <View>
            <Text>Search bar</Text>
        </View> */}
        <FlatList
            data={productFilter}
            ListHeaderComponent={ListHeader}
            renderItem={({ item, index}) => (
               <ListItem
                  {...item}
                  navigation={props.navigation}
                  index={index}
               />
                
            )} 
            keyExtractor={(item) => item.id}       
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 160,
    backgroundColor: 'white'
  },
  buttonContainer: {
    margin: 20,
    alignSelf: 'center',
    flexDirection: 'row'
  },
  buttonText: {
    marginLeft: 4,
    color: 'white'
  },
  listHeader: {
    flexDirection: 'row',
    padding: 5,
    backgroundColor: 'gainsboro'
  },
  headerItem: {
    margin: 3,
    width: width / 6
  }
})

export default Products;