import React,{useEffect,useState} from 'react';
import {SafeAreaView,StyleSheet,ScrollView,View,Text,StatusBar,
       AsyncStorage,BackHandler,ToastAndroid} from 'react-native';
import {Router,Scene,Tabs,Actions} from 'react-native-router-flux'
import SplashScreen from 'react-native-splash-screen'
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './src/home/Home'
import Goods from './src/goods/Goods'
import Userinfor from './src/user/Userinfor'
import SwiperPage from './src/common/SwiperPage'
import Login from './src/common/Login'
import Zhuce from './src/common/Zhuce';
import Fabu from './src/user/Fabu'
console.disableYellowBox = true;
const App = () => {
  let now = 0;
  let [isLoign,setLogin] = useState(false);
  let [isInstall,setInstall] = useState(true);
  useEffect(()=>{
    AsyncStorage.getItem('isInstall')
    .then(res=>{
      if(res){
        setInstall(false);
      }
    })
    AsyncStorage.getItem('user')
    .then(res=>{
      let user = JSON.parse(res);
      if(!user){
        SplashScreen.hide();
      }
      if(user && user.token){
        setLogin(true);
        SplashScreen.hide();
      }
    })
  },[])
  let afterInstall = ()=>{
		setInstall(false)
	}
	if(isInstall){
		return <View style={{flex:1}}>
			<SwiperPage afterInstall={afterInstall}/>
		</View>
	}
  return (
    <Router
    backAndroidHandler={()=>{
      if(Actions.currentScene != 'home'){
        Actions.pop();
        return true;
      }else{
        if(new Date().getTime()-now<2000){
          BackHandler.exitApp();
        }else{
          ToastAndroid.show('确定要退出吗',100);
          now = new Date().getTime();
          return true;
        }
      }
      
    }}>
      <Scene key='homePage'>
        <Tabs key='tabber' tabBarStyle={{backgroundColor:"#fff"}} hideNavBar='true' activeTintColor='red'>
          {/* 首页 */}
          <Scene key='homepage' title='首页'
          icon={({focused})=><Icon 
          color={focused?'red':'blue'} name='home' size={30}/>}>
            <Scene key='home' component={Home} hideNavBar />
          </Scene>
          {/* 商品分类页 */}
          <Scene key='goodspage' title='商品分类'
          icon={({focused})=><Icon
           color={focused?'red':'blue'} name='file' size={30}/>}>
            <Scene key='goods' component={Goods} hideNavBar />
          </Scene>
          {/* 个人中心页 */}
          <Scene key='userpage' title='个人中心'
          icon={({focused})=><Icon
           color={focused?'red':'blue'} name='user'size={30}/>}>
            <Scene key='userinfor' component={Userinfor} hideNavBar />
          </Scene>
        </Tabs>
        <Scene key='login' component={Login} hideNavBar initial={!isLoign}/>
        <Scene key='zhuce' component={Zhuce} hideNavBar/>
        <Scene key='fabu' component={Fabu} hideNavBar/>
      </Scene>
    </Router>
  );
};
const styles = StyleSheet.create({
  
});
export default App;