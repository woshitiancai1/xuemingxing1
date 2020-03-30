import React,{Component} from 'react'
import {View,Text, StyleSheet, TextInput,TouchableOpacity, Alert, AsyncStorage} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import {Actions} from 'react-native-router-flux';
import { myFetch } from '../utils';
export default class Zhuce extends Component{
    constructor(){
        super();
        this.state = {
            username:"",
            password:"",
            passwordAgain:"",
            isLoading:false
        }
    }
    usernameChange =(inputData) =>{
        this.setState({
            username:inputData
        })
    }
    passwordChange=(inputData)=>{
        this.setState({
            password:inputData
        })
    }
    passwordChangeAgain=(inputData)=>{
        this.setState({
            passwordAgain:inputData
        })
    }
    zhuce=()=>{
        if(this.state.username == "" || this.state.password =="" || this.state.passwordAgain ==""){
            Alert.alert("用户名或密码不能为空!");
        }
        else if(this.state.username != "" && this.state.password !="" && this.state.passwordAgain !=""){
            if(this.state.password != this.state.passwordAgain){
                Alert.alert("两次密码输入不一致!");            
            }
            else{
                this.setState({
                    isLoading:true
                })
                myFetch.post('/login',{
                    username:this.state.username,
                    password:this.state.password
                })
                .then(res=>{
                    if(res.data.num == "1"){
                        Alert.alert("账户已经注册过!");
                    }
                    else if(res.data.num == "2"){
                        Alert.alert("连接错误!")
                    }
                    else{
                        AsyncStorage.setItem('user',JSON.stringify(res.data))
                        .then(()=>{
                            this.setState({isLoading:false})
                            Actions.login()
                        })
                    }
                    console.log(res.data);
                })
            }
        }
        
    }
    backLogin=()=>{
        Actions.login();
    }
    render(){
        return(
            <View style={styles.box0}>
                <View style={styles.box1}>
                    <Icon name='user' color='red' size={40}/>
                    <TextInput placeholder='请输入用户名' style={styles.input1} onChangeText={this.usernameChange}/>
                </View>
                <View style={styles.box2}>
                    <Icon name='user' color='red' size={40}/>
                    <TextInput placeholder='请输入密码' style={styles.input1}  onChangeText={this.passwordChange}/>
                </View>
                <View style={styles.box2}>
                    <Icon name='user' color='red' size={40}/>
                    <TextInput placeholder='请输再次入密码' style={styles.input1}  onChangeText={this.passwordChangeAgain}/>
                </View>
                <TouchableOpacity style={styles.button1} onPress={this.zhuce}>
                    <Text style={styles.text1}>注册</Text>
                </TouchableOpacity>
                <View style={styles.box3}>
                    <TouchableOpacity onPress={this.backLogin} >
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