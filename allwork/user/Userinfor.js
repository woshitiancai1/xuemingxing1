import React,{Component} from 'react'
import {View,Text,TextInput,ScrollView,SafeAreaView,
        Image,StyleSheet,TouchableOpacity, AsyncStorage}from 'react-native'
import {Router,Scene, Actions } from 'react-native-router-flux'
import ImageCropPicker from 'react-native-image-crop-picker';
import Button from 'react-native-button'
import Fabu from './Fabu'
export default class Geren extends Component{
    constructor(){
        super();
        this.state = {
            data:'',
            imageUrl:''
        }
    }
    backAll=()=>{
        AsyncStorage.removeItem('isInstall');
        AsyncStorage.removeItem('user');
        AsyncStorage.clear();
        Actions.login();
    }
    render(){
        return(
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.box}>
                        <View style={styles.box1}>
                            <View  style={styles.img1}>
                                <Image source={require('../images/6.jpg')} style={styles.img2}/>
                            </View>
                            <Text style={styles.text1}>薛明星</Text>
                            <View style={styles.box2}></View>
                        </View>
                        <View style={styles.box3}>
                            <Image source={require('../images/10.png')} style={{marginLeft:'3%'}}/>
                            <Text style={styles.text2}>我的个人中心</Text>
                        </View>
                        <View style={styles.box4}></View>
                        <View style={styles.box5}>
                            <View style={styles.box6}>
                                <View style={styles.box7}>
                                    <Image source={require('../images/11.png')} style={{marginTop:20}}/>
                                    <Text style={styles.text3}>账户管理</Text>
                                </View>
                                <View style={styles.box7}>
                                    <Image source={require('../images/11.png')} style={{marginTop:20}}/>
                                    <Text style={styles.text3}>收货地址</Text>
                                </View>
                                <View style={styles.box7}>
                                    <Image source={require('../images/11.png')} style={{marginTop:20}}/>
                                    <Text style={styles.text3}>我的信息</Text>
                                </View>
                            </View>
                            <View style={styles.box6}>
                                <View style={styles.box7}>
                                    <Image source={require('../images/11.png')} style={{marginTop:20}}/>
                                    <Text style={styles.text3}>我的订单</Text>
                                </View>
                                <View style={styles.box7}>
                                    <Image source={require('../images/11.png')} style={{marginTop:20}}/>
                                    <Text style={styles.text3}>我的二维码</Text>
                                </View>
                                <View style={styles.box7}>
                                    <Image source={require('../images/11.png')} style={{marginTop:20}}/>
                                    <Text style={styles.text3}>我的积分</Text>
                                </View>
                            </View>
                            <View style={styles.box6}>
                                <View style={styles.box7}>
                                    <Image source={require('../images/11.png')} style={{marginTop:20}}/>
                                    <Text style={styles.text3}>我的收藏</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.box8}></View>
                        <View style={styles.box10}>
                            <View style={styles.box6}>
                                <View style={styles.box7}>
                                    <Image source={require('../images/12.png')} style={{marginTop:20}}/>
                                    <Text style={styles.text3}>居家维修保养</Text>
                                </View>
                                <View style={styles.box7}>
                                    <Image source={require('../images/12.png')} style={{marginTop:20}}/>
                                    <Text style={styles.text3}>出行接送</Text>
                                </View>
                                <View style={styles.box7}>
                                    <Image source={require('../images/12.png')} style={{marginTop:20}}/>
                                    <Text style={styles.text3}>我的受赠人</Text>
                                </View>
                            </View>
                            <View style={styles.box6}>
                                <View style={styles.box7}>
                                    <Image source={require('../images/12.png')} style={{marginTop:20}}/>
                                    <Text style={styles.text3}>我的住宿优惠</Text>
                                </View>
                                <View style={styles.box7}>
                                    <Image source={require('../images/11.png')} style={{marginTop:20}}/>
                                    <Text style={styles.text3}>我的活动</Text>
                                </View>
                                <View style={styles.box7}>
                                    <Image source={require('../images/12.png')} style={{marginTop:20}} onPress={()=>Actions.fabu()}/>
                                    <Text style={styles.text3} onPress={()=>Actions.fabu()}>我的发布</Text>
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity onPress={this.backAll} style={styles.button1}>
                            <Text style={styles.text5}>退出登录</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    btn:{
        width: 200,
        height: 40,
        color: '#fff',
        textAlignVertical: 'center',
        borderRadius: 20,
        backgroundColor: 'red'
    },
    box:{
        width:'100%',
        flex:1,
        backgroundColor:'white',
    },
    box1:{
        height:385,
        width:'100%',
        backgroundColor:'#f23030',
        alignItems:'center',
    },
    img1:{
        width:150,
        height:150,
        borderRadius:75,
        marginTop:60,
        borderColor:'white',
        backgroundColor:'white',
    },
    img2:{
        width:146,
        height:146,
        marginTop:2,
        marginLeft:2,
        borderRadius:73,
    },
    text1:{
        color:'white',
        fontSize:40,
        marginTop:20,
    },
    box2:{
        width:'100%',
        height:20,
        backgroundColor:'#f67070',
        marginTop:80,
        borderRadius:10,
    },
    box3:{
        width:'100%',
        height:75,
        flexDirection:'row',
        alignItems:'center',
    },
    text2:{
        color:'#4f4e4e',
        fontSize:25,
        marginLeft:'3%'
    },
    box4:{
        width:'100%',
        height:5,
        backgroundColor:'#eee',
    },
    box5:{
        width:'100%',
        height:385,
        backgroundColor:'white',
    },
    box6:{
        width:'100%',
        height:128,
        flexDirection:'row',
    },
    box7:{
        width:'33%',
        alignItems:'center',
    },
    text3:{
        color:'#4f4e4e',
        fontSize:20,
        marginTop:10,
    },
    box8:{
        width:'100%',
        height:20,
        backgroundColor:'#eee',
    },
    box10:{
        width:'100%',
        height:256,
        backgroundColor:'white',
    },
    box9:{
        width:'100%',
        height:120,
        backgroundColor:'#eee',
        alignItems:'center'
    },
    text4:{
        fontSize:40,
        color:'#808080',
        marginTop:30,
    },
    button1:{
        width:'60%',
        height:50,
        backgroundColor:'red',
        marginLeft:'20%',
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
        marginTop:20,
        marginBottom:50,
    },
    text5:{
        color:'white',
        fontSize:25,
    }
})