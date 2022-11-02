import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ScrollView, Dimensions, ActivityIndicator} from 'react-native';
import CategoryFilter from './CategoryFilter';
import { VStack, Box, Icon, Input, Text, Flex} from 'native-base';
import baseURL from '../../assets/common/baseUrl';
import axios from 'axios';
import data from  '../../assets/data/products.json';
import ProductList from './ProductList';
import SearchedProducts from './SearchedProducts';
import HomeSearched from '../../Shared/HomeSearched';
import Banner from '../../Shared/Banner';

var {height} = Dimensions.get('window');

const ProductContainer = (props) => {

    const [products, setProducts] = useState([]);
    const [productsFiltered, setProductsFiltered] = useState([]);
    const [focus, setFocus] = useState();
    const [categories, setCategories] = useState([]);
     const [productsCtg, setProductsCtg] = useState([]);
     const [active, setActive] = useState();
     const [initialState, setInitialState] = useState([]);
     const [loading, setLoading] = useState(true);

    useEffect(() => {       
        setFocus(false);
           
         setActive(-1);
            setLoading(false);
       

         axios
           .get(`${baseURL}products`)
           .then((res) => {
            setProducts(res.data);
            setProductsFiltered(res.data);
            setProductsCtg(res.data);
            setInitialState(res.data);
           })
           .catch((error) => {
            console.log('Api call error')
           })

           axios
           .get(`${baseURL}categories`)
           .then((res) => {
            setCategories(res.data);    
           })
           .catch((error) => {
            console.log('Api call error')
           })

        return () => {
            setProducts([])
            setProductsFiltered([])
            setFocus()
             setCategories([])
             setActive()
             setInitialState()

        }
    },[])

    const searchProduct = (text) => {
        setProductsFiltered(
            products.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))
        )
    }

    const openList = () => {
        setFocus(true);
    }

    const onBlur = () => {
        setFocus(false);
    }

    // Categories
    const changeCtg = (ctg) => {
        ctg === 'all'
         ? [setProductsCtg(initialState), setActive(true)]
         : [
            setProductsCtg(
                products.filter((i) => i.category._id === ctg),
                setActive(true)
            )
         ]
    }
  return (
    <>
    {loading == false ? (
            <Box flex={1}>   
               <HomeSearched/>
               
            {focus == true ? (
                <SearchedProducts
                navigation={props.navigation}
                  productsFiltered={productsFiltered}
                />
            ) : (
                <ScrollView flex={1}>
                    <Flex flexWrap="wrap" direction="row" justifyContent="space-between" >
                <View>
                    <Banner/>
                </View>
                <View>
                    <CategoryFilter
                       categories={categories}
                       categoryFilter={changeCtg}
                       productsCtg={productsCtg}
                       active={active}
                       setActive={setActive}
                       
                    />
                </View>
                {productsCtg.length > 0 ? (
                     <View >
                     {productsCtg.map((item) => {
                        return (
                            <ProductList
                            navigation={props.navigation}
                              key={item._id.$oid}
                              item={item}
                             />
                        )
                     })}
                 </View>      
                ) : (
                    <View style={[styles.center, {height: height / 2}]}>
                        <Text>No products found</Text>
                    </View>
                )}
                   
            </Flex>
        </ScrollView>               
            )}
            
        </Box>
    ) : (
        // Loading
        <Box style={[styles.center, { backgroundColor: "#f2f2f2"}]}>
            <ActivityIndicator size="large" color="red"/>
        </Box>
    )}   
   </>
  )
}

const styles = StyleSheet.create({
    container: {
      flexWrap: "wrap",
      backgroundColor: 'gainsboro'
      
    },
    listContainer: {
        height: height,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        backgroundColor: 'gainsboro'
    },
    center: {
        justifyContent: 'center',
        alignItems:'center'
    }
  });

export default ProductContainer;


// import React, {useState, useEffect} from 'react';
// import {View, StyleSheet, ActivityIndicator, FlatList} from 'react-native';
// import {Container, VStack, Icon, Input, Text} from 'native-base';
// import data from  '../../assets/data/products.json';
// import ProductList from './ProductList';
// import 

// const ProductContainer = () => {
//     const [products, setProducts] = useState([]);
//     const [productsFiltered, setProductsFiltered] = useState([]);
// //     const [focus, setFocus] = useState();
// //     const [categories, setCategories] = useState([]);
// //     const [productsCtg, setProductsCtg] = useState([]);
// //     const [active, setActive] = useState();
// //     const [initialState, setInitialState] = useState([]);

//     useEffect(() => {
//                 setProducts(data);
//                 setProductsFiltered(data);
//                 setFocus(false);
//                // setCategories(categories);
//                // setActive(-1);
//                 //setInitialState(data);
        
//                 return () => {
//                     setProducts([])
//                     setProductsFiltered([])
//                     setFocus()
//                   //  setCategories([])
//                    // setActive()
//                   //  setInitialState()
        
//                 }
//             },[])

//             const searchProduct = (text) => {
//                     setProductsFiltered(
//                          products.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))
//                  )
//             }
                
//              const openList = () => {
//                 setFocus(true);
//             }
                
//             const onBlur = () => {
//               setFocus(false);
//          }
        
//   return (
//     <Container>   
//          <VStack w="100%" space={5} alignSelf="center">                             
//              <Input placeholder="Search" 
//                  variant="filled" width="100%"
//                  borderRadius="10" py="1" px="2"
//                  onFocus={openList}
//                  onChangeText={(text) => searchProduct(text)}
//             /> 
//         </VStack>
//         {focus == true ? (
//                             <SearchedProduct
//                               productsFiltered={productsFiltered}
//                             />
//                         ) : (
//                             <View >
//                             <View>
//                                 {/* <Banner/> */}
//                             </View>
//                             <View>
//                                 {/* <CategoryFilter
//                                    categories={categories}
//                                    categoryFilter={changeCtg}
//                                    productsCtg={productsCtg}
//                                    active=
//                                 /> */}
//                             </View>
//                                 <View >
//                                 <FlatList
//                                     data={products}
//                                     numColumns={2}
//                                     renderItem={({item})=> 
//                                     <ProductList
//                                         key={item.brand}
//                                         item={item}
//                                     />
//                                     }
//                                     keyExtractor={item => item.name}
//                                 />
//                             </View>      
//                         </View>
//                         )}
                        
//                     </Container>
//   );
// };

// export default ProductContainer;
