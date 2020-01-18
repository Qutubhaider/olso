import * as React from 'react';
import { Text, View, StyleSheet,Image, Dimensions,ImageBackground } from 'react-native';
import normalize from 'react-native-normalize';

const screenWidth = Math.round(Dimensions.get('window').width)
const screenHeight = Math.round(Dimensions.get('window').height)
export default class NavigationDrawer extends React.Component {
  render() {
    
    return (
      <View style={{height:screenHeight,backgroundColor:"white"}}>
          <ImageBackground 
         style={{width:screenWidth,justifyContent:"flex-start",flexDirection:"row",padding:normalize(10)}}
         source={require('./images/hero-img3.png')}>
          <Image
            style={{ width: normalize(80), height:normalize(90),margin:"4%"}}
            resizeMode="contain"
            source={require('./images/user.png')}
        />
        <View style={{flexDirection:"column",alignSelf:"center"}}>
          <Text style={{color:"white",fontSize:normalize(18)}}>Priyansh Roy</Text>
        <Text style={{color:"white",fontSize:normalize(18)}}>priyansh.roy@gmail.com</Text>
        </View>
         </ImageBackground>
      <View style={{flex:1}}>
        <View style={styles.navOption}>
      <Image style={{ width: normalize(30), height:normalize(26)}}
            resizeMode="contain"
            source={require('./images/icon-home.png')}/>
       <Text style={[{color:"#6A4DFF"},styles.textStyle]}>Home</Text>     
      </View>
      <View style={styles.navOption}>
      <Image
            style={{ width: normalize(30), height:normalize(26)}}
            resizeMode="contain"
            source={require('./images/face.png')}/>
       <Text style={styles.textStyle}>Profile</Text>     
      </View>
      <Text style={{borderBottomWidth:1,opacity:0.3}}></Text>
      <View style={styles.navOption}>
      <Image
            style={{ width: normalize(30), height:normalize(26)}}
            resizeMode="contain"
            source={require('./images/clock.png')}/>
       <Text style={styles.textStyle}>Booking History</Text>     
      </View>
      <View style={styles.navOption}>
      <Image
            style={{ width: normalize(30), height:normalize(26)}}
            resizeMode="contain"
            source={require('./images/stats.png')}/>
       <Text style={styles.textStyle}>Stats</Text>     
      </View>
      <View style={styles.navOption}>
      <Image
            style={{ width: normalize(30), height:normalize(26)}}
            resizeMode="contain"
            source={require('./images/question.png')}/>
       <Text style={styles.textStyle}>Contact Support</Text>     
      </View></View>
     <Text style={{borderBottomWidth:1,opacity:0.3, bottom:0}}></Text>
      <View style={{flexDirection:"row",padding:normalize(25)}}>
      <Image
            style={{ width: normalize(30), height:normalize(26)}}
            resizeMode="contain"
            source={require('./images/logout.png')}/>
       <Text style={styles.textStyle}>Logout</Text>     
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle:{
  fontSize:normalize(20), 
  paddingLeft:normalize(20)
  },
  navOption:{
    flexDirection:"row",
    padding:normalize(10),
     left:"2%"
  }
});
    