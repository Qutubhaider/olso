import * as React from 'react';
import {Text,Button, View, StyleSheet,Image, Dimensions, ImageBackground} from 'react-native';
import normalize from 'react-native-normalize';


const screenWidth = Math.round(Dimensions.get('window').width)
const screenHeight = Math.round(Dimensions.get('window').height)
export default class Onboarding extends React.Component {
  render() {
    return (
      <View style={{height:screenHeight}}>
        <ImageBackground 
         style={{width:screenWidth,height:screenHeight,justifyContent:"flex-start"}}
         source={require('./images/hero-img2.png')}>
        <View style={{justifyContent:"center", alignItems:"center",flex:1}}>
          <Text style={{fontSize:normalize(48),fontWeight:"bold",color:"white",textAlign:"center"}}>Welcome to OLSO</Text>
          <Text style={{color:"white", fontSize:normalize(15),margin:"5%",flexWrap:"wrap",textAlign:"center"}}>The best place to rent thousands of products and earn on the go.</Text>
        </View>
        <View style={{padding:"3%", marginBottom:"5%"}}>
          <Text style={{color:"white"}}>Continue with</Text>
          <Text
          style={{height:normalize(35),margin:normalize(10), color:"white",backgroundColor:"#64B5F6",textAlign:"center",textAlignVertical:"center"}}
          onPress={() => Alert.alert(' email pressed')}
          >EMAIL</Text>
      <Text
      style={{height:normalize(35),margin:normalize(10), color:"white",backgroundColor:"#353A50",textAlign:"center",textAlignVertical:"center"}}
      onPress={() => Alert.alert('Facebook Button pressed')}
      >FACEBOOK</Text></View>
      </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});
    