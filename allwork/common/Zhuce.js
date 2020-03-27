import React,{Component} from 'react'
import {View,Text, StyleSheet, TextInput,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import {Actions} from 'react-native-router-flux';
export default class Zhuce extends Component{
    constructor(){
        super();
    }
    backLogin=()=>{
        Actions.login();
    }
    render(){
        return(
            <View style={styles.box0}>
                <View style={styles.box1}>
                    <Icon name='user' color='red' size={40}/>
                    <TextInput placeholder='请输入用户名' style={styles.input1}/>
                </View>
                <View style={styles.box2}>
                    <Icon name='user' color='red' size={40}/>
                    <TextInput placeholder='请输入密码' style={styles.input1}/>
                </View>
                <View style={styles.box2}>
                    <Icon name='user' color='red' size={40}/>
                    <TextInput placeholder='请输再次入密码' style={styles.input1}/>
                </View>
                <TouchableOpacity style={styles.button1} onPress={()=>Actions.login()}>
                    <Text style={styles.text1}>注册</Text>
                </TouchableOpacity>
                <View style={styles.box3}>
                    <TouchableOpacity onPress={this.backLogin}>
                        <Text style={styles.text3}>返回登录页</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    box0:{
        flex:1,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    box1:{
        width:'80%',
        height:60,
        backgroundColor:'#fff',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input1:{
        fontSize:30,
        marginLeft:'2.5%'
    },
    box2:{
        width:'80%',
        height:60,
        backgroundColor:'#fff',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:20,
    },
    button1:{
        width:'80%',
        height:50,
        backgroundColor: '#ccc',
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    box3:{
        width:'80%',
        height:40,
        marginTop:10,
        flexDirection:'row',
        alignItems:'center',
    },
    text1:{
        fontSize:30,
    },
    text3:{
        fontSize:20,
        marginLeft:'5%'
    }
});