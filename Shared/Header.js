import React from 'react';
import { StyleSheet, Image, View, SafeAreaView } from 'react-native';

const Header = () => {
  return (
    <SafeAreaView style={styles.header}>
       <Image source={require("../assets/eshop.png")}
       resizeMode="contain"
       style={{height: 50}}
        />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        flexDirection: 'row',
        alignContent: "center",
        justifyContent: "center",
        padding: 10,
        
    }
})

export default Header;
