import React,{Component} from 'react'
import {View,Text, StyleSheet, TextInput,TouchableOpacity,AsyncStorage,
        BackHandler,ToastAndroid,Dimensions,Alert} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import {myFetch} from '../utils/index'
const {width,scale} = Dimensions.get('window');
export default class Login extends Component{
    constructor(){
        super();
        this.state = {
            username:'',
            pwd:'',
            isLoading:false,
        }
    }
    componentDidMount() {
        if (Platform.OS === 'android') {
            BackHandler.addEventListener('hardwareBackPress',this.onBackHandler);
        }
    }
    componentWillUnmount() {
        if (Platform.OS === 'android') {
            BackHandler.removeEventListener('hardwareBackPress',this.onBackHandler);
        }
    }
    onBackHandler = ()=>{
        if(this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
            BackHandler.exitApp()          
            return false;        
        }
        this.lastBackPressed = Date.now();
        ToastAndroid.show("再按一次退出应用", ToastAndroid.SHORT);
        return true;
    }
    userhandle=(text)=>{
        this.setState({
            username:text
        })
    }
    pwdhandle=(text)=>{
        this.setState({
            pwd:text
        })
    }
    homePage=()=>{
        if(this.state.username == "" || this.state.pwd ==""){
            Alert.alert("用户名或密码不能为空!");
        }
        else{
            this.setState({
                isLoading:true,
            })
            myFetch.post('/login',{
                username:this.state.username,
                pwd:this.state.pwd,
            }).then(res=>{
                AsyncStorage.setItem('user',JSON.stringify(res.data))
                .then(()=>{
                    this.setState({isloading:false})
                    Actions.homepage();
                })
                console.log(res.data);
            })
        }
    }
    zhuce = () =>{
        Actions.zhuce();
    }
    render(){
        return(
            <View style={styles.box0}>
                <View style={styles.box1}>
                    <Icon name='user' color='red' size={40}/>
                    <TextInput placeholder='请输入用户名' style={styles.input1}
                    onChangeText={this.userhandle}/>
                </View>
                <View style={styles.box2}>
                    <Icon name='user' color='red' size={40}/>
                    <TextInput placeholder='请输入密码' style={styles.input1}
                    onChangeText={this.pwdhandle}
                    secureTextEntry={true}/>
                </View>
                <TouchableOpacity style={styles.button1} onPress={this.homePage}>
                    <Text style={styles.text1}>登录</Text>
                </TouchableOpacity>
                <View style={styles.box3}>
                    <Text style={styles.text2}>忘记密码</Text>
                    <TouchableOpacity onPress={this.zhuce}>
                        <Text style={styles.text3}>注册</Text>
                    </TouchableOpacity>
                </View>
                {
                    this.state.isLoading?<View><Text>正在登录</Text></View>:null
                }
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
    text2:{
        fontSize:20,
        marginLeft:'5%'
    },
    text3:{
        fontSize:20,
        marginLeft:'60%'
    }
});