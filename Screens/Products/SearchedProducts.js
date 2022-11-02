import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {Content, Body,Text, HStack, VStack} from 'native-base';

var {width} = Dimensions.get("window")
const SearchedProducts = (props) => {
    const {productsFiltered} = props;

  return (
    <Content style={{width: width}}>
     
      {productsFiltered.length > 0 ? (
        productsFiltered.map((item) => (
            <VStack
                 onPress={() => {
                  props.navigation.navigate("Product Detail", {item: item})
                 }}
                key={item._id.$oid}  
                avatar          
            >
              <HStack>
                {/* <Thumbnail
                  source={{uri: item.image ? item.image : "https://www.istockphoto.com/photo/3d-red-question-mark-gm1334419989-416546385?utm_source=pixabay&utm_medium=affiliate&utm_campaign=SRP_photo_sponsored&utm_content=https%3A%2F%2Fpixabay.com%2Fphotos%2Fsearch%2Fquestion%2520mark%2F%3Fmanual_search%3D1&utm_term=question+mark"}}
                /> */}
              </HStack>
                <Body>
                  <Text>{item.name}</Text>
                  <Text note>{item.description}</Text>
                </Body>
            </VStack>
        ))
      ) : (
        <View style={styles.center}>
          <Text style={{alignSelf: 'center'}}>
            No products match the selected criteria
          </Text>
        </View>
      )}
    </Content>
  );
};

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default SearchedProducts;

{/* <List>
  <ListItem>
    <Left>
      <Text>Simon Mignolet</Text>
    </Left>
    <Right>
      <Icon name="arrow-forward" />
    </Right>
  </ListItem>
  <ListItem>
    <Left>
      <Text>Nathaniel Clyne</Text>
    </Left>
    <Right>
      <Icon name="arrow-forward" />
    </Right>
  </ListItem>
  <ListItem>
    <Left>
      <Text>Dejan Lovren</Text>
    </Left>
    <Right>
      <Icon name="arrow-forward" />
    </Right>
  </ListItem>
</List>

<VStack space={3} divider={<Divider />} w="90%">
  <HStack justifyContent="space-between">
    <Text>Simon Mignolet</Text>
    <Icon name="arrow-forward" />
  </HStack>
  <HStack justifyContent="space-between">
    <Text>Nathaniel Clyne</Text>
    <Icon name="arrow-forward" />
  </HStack>
  <HStack justifyContent="space-between">
    <Text>Dejan Lovren</Text>
    <Icon name="arrow-forward" />
  </HStack>
</VStack> */}