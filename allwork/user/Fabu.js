import React,{Component} from 'react'
import {View,Text,Image,StyleSheet,ScrollView,ToastAndroid} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
export default class Fabu extends Component{
    constructor(){
        super();
        this.state = {
            titles:[],
            string:['待回复','已回复'],
            pageNum:'1',
            tag:0,
        }
    }
    componentDidMount(){
        this.setState({
            tag:Math.floor(Math.random()*2),
        })
        fetch('https://cnodejs.org/api/v1/topics')
        .then(res=>res.json())
        .then(res=>{
            res.data.map((item,index)=>{
                this.setState({
                    titles:res.data.slice(0,15)
                })
            })
        })
    }
    pageAdd=()=>{
        this.setState({
            pageNum:String(Number(this.state.pageNum)+1),
        })
        var page1 = Number(this.state.pageNum)+1;
        fetch('https://cnodejs.org/api/v1/topics?&page='+page1)
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                titles:res.data.slice(0,15)
            })
        })
    }
    pageReduce=()=>{
        if(Number(this.state.pageNum) == 1){
            this.setState({
                pageNum:this.state.pageNum,
            })
            ToastAndroid.show("这是初始页，不可再点上一页",ToastAndroid.SHORT,ToastAndroid.CENTER);
        }
        else{
            this.setState({
                pageNum:String(Number(this.state.pageNum)-1)
            })
            var page2 = Number(this.state.pageNum)-1;
            fetch('https://cnodejs.org/api/v1/topics?&page='+page2)
            .then(res=>res.json())
            .then(res=>{
                this.setState({
                titles:res.data.slice(0,15)
                })
            })
        }
    }
    render(){
        return(
            <View style={styles.box}>
                <View style={styles.box1}>
                    <Icon name='left' size={30} color='white' onPress={()=>{
                        Actions.pop();
                    }}/>
                    <Text style={styles.text1}>我的发布</Text>
                    <Text style={styles.text2}>...</Text>
                </View>
                <View style={styles.box2}></View>
                <ScrollView>
                    <View style={styles.box3}>
                        {
                            this.state.titles.map((item,index)=>(
                            <View key={index} style={styles.box4}>
                                <View style={styles.box5}>
                                    <Text style={styles.text3}>{(item.title).slice(0,15)+"..."}</Text>
                                </View>
                                <Text style={styles.text3}>{(item.create_at).slice(0,10)}</Text>
                                <Text style={styles.text4}>{this.state.string[this.state.tag]}</Text>
                            </View>
                            ))
                        }
                    </View>
                </ScrollView>
                <View style={styles.box6}>
                        <Button style={{
                            width:'120%',
                            height:40,
                            color:'white',
                            backgroundColor:'red',
                            marginLeft:'15%',
                            fontSize:30,
                            borderRadius:20,}}
                            onPress={this.pageReduce}>上一页</Button>
                        <Text style={styles.text5}>第{this.state.pageNum}页</Text>
                        <Button style={{
                            width:'120%',
                            height:40,
                            color:'white',
                            backgroundColor:'red',
                            marginLeft:'15%',
                            fontSize:30,
                            borderRadius:20,}}
                            onPress={this.pageAdd}>下一页</Button>
                </View>
            </View> 
        )
    }
}
const styles = StyleSheet.create({
    box:{
        width:'100%',
    },
    box1:{
        width:'100%',
        height:70,
        backgroundColor:'red',
        alignItems:'center',
        flexDirection:'row',
    },
    text1:{
        fontSize:30,
        color:'white',
        marginLeft:'30%',
    },
    text2:{
        fontSize:60,
        color:'white',
        marginLeft:'30%',
    },
    box2:{
        width:'100%',
        height:20,
        backgroundColor:'#f5f5f5',
    },
    box3:{
        width:'100%',
        backgroundColor:'#ffffff',
    },
    box4:{
        marginTop:20,
        flexDirection:'row',
    },
    text3:{
        fontSize:20,
        color:'#363636',
    },
    text4:{
        fontSize:20,
        color:'#363636',
        marginLeft:'10%',
    },
    box5:{
        width:'60%',
    },
    box6:{
        width:'100%',
        height:200,
        backgroundColor:'white',
        marginTop:20,
        flexDirection:'row',
        alignItems:'center',
    },
    text5:{
        marginLeft:'15%',
        fontSize:25,
    }
})