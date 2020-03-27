import React, { Component } from 'react'
import { View, Text, StyleSheet, Image,TouchableOpacity,AsyncStorage, } from 'react-native'
import Swiper from 'react-native-swiper';
import Button from 'react-native-button'
export default class SwiperPage extends Component {
    start =  () => {
        AsyncStorage.setItem('isInstall','true',()=>{
            this.props.afterInstall();
        });
    };
    render() {
        return (
            <Swiper>
                <View style={styles.slide1}>
                    <Image source={require('../images/1.jpg')} style={styles.img} />
                </View>
                <View style={styles.slide1}>
                    <Image source={require('../images/2.jpg')} style={styles.img} />
                </View>
                <View style={styles.slide1}>
                    <Image source={require('../images/3.jpg')} style={styles.img} />
                </View>
                <View style={styles.slide1}>
                    <Image source={require('../images/4.jpg')} style={styles.img} />
                    <TouchableOpacity style={styles.start} onPress={this.start}>
                        <Text style={{ color:'#fff'}}>开始体验</Text>
                    </TouchableOpacity>
                </View>
            </Swiper>
        )
    }
}
const styles = StyleSheet.create({
    img: {
        width: '100%',
        height: '100%',
    },
    slide1: {
        flex: 1,
        height: '100%',
        alignItems: 'center',
    },
    start: {
        position: 'absolute',
        bottom: 120,
        width: '50%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
        borderRadius: 20,
    },
})