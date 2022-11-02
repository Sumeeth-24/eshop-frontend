import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, Dimensions, View, ScrollView} from 'react-native';
import Swiper from 'react-native-swiper/src';

var {width} = Dimensions.get('window');

const Banner = () => {
    const [bannerData, setBannerData] = useState([]);

    useEffect(() => {
        setBannerData([
            "https://th.bing.com/th/id/R.6198971df3c18b48de76dbd9bf19fb91?rik=Ixhfepq6wiQb7g&riu=http%3a%2f%2flofrev.net%2fwp-content%2fphotos%2f2016%2f06%2fnike-brand-1.jpg&ehk=kpAMKYUVQBZYIupv3oFfMy5tNwqH6Hl1KIEP4CyPSww%3d&risl=&pid=ImgRaw&r=0",
            "https://www.mariostoeckinger.com/tailoratdrum/img/about-us/about-us-pricing_clip_image004.jpg",
            "https://th.bing.com/th/id/R.42bad71116e59080343de22122fc5258?rik=XuO77EaqKjMBLw&riu=http%3a%2f%2fst1.bgr.in%2fwp-content%2fuploads%2f2015%2f11%2ftitan-logo.jpg&ehk=MGnO7WEz6OD3TGr%2blwfMgF9OTIz9Q485iVZIXELtTmE%3d&risl=&pid=ImgRaw&r=0"
        ])
        return () => {
            setBannerData([])
        }
    }, [])

  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.swiper}>
        <Swiper
            style={{ height: width / 2}}
            showButtons={false}
            autoplay={true}
            autoplayTimeout={2}
        >
            {bannerData.map((item) => {
                return (
                    <Image
                      key={item}
                      style={styles.imageBanner}
                      resizeMode="contain"
                      source={{uri: item}}
                    />
                );
            })}
        </Swiper>
        <View style={{ height: 20}}></View>
      </View>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gainsboro'
    },
    swiper: {
        width: width,
        alignItems: 'center',
        marginTop: 10
    },
    imageBanner: {
        height: width / 2,
        width: width - 40,
        borderRadius: 10,
        marginHorizontal: 20
    }
})

export default Banner;
