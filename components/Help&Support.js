import * as React from 'react';
import { Text, View, StyleSheet,Image, Dimensions } from 'react-native';
import normalize from 'react-native-normalize';

const screenWidth = Math.round(Dimensions.get('window').width)
const screenHeight = Math.round(Dimensions.get('window').height)
export default class HelpSupport extends React.Component {
  render() {
    var popularArr=[
      "Product Brand/Model not available in Product list",
      "How to edit Profile",
      "How to properly price Products"
    ]

    var contactUs=[
      {image:require('./images/icon8.png'),  text:"Request callback"},
      {image:require('./images/icon9.png'),  text:"Contact Us"},
      {image:require('./images/icon10.png'),  text:"Send feedback"}
    ]
    return (
      <View style={{height:screenHeight, backgroundColor:"white"}}>
          <View style={styles.header}>
          <View style={{alignSelf:"flex-start",flexDirection:"row",paddingTop:"4%"}}>
          <Image
            style={{alignSelf:"flex-start",marginLeft:"4%",marginTop:"3%", width: normalize(23), height:normalize(23)}}
            resizeMode="contain"
            source={require('./images/close.png')}/>
          <Text style={{color:"white",fontWeight:"bold",paddingLeft:"3%", fontSize:normalize(25)}}>Help & Support</Text>
          </View>
          <View style={{alignSelf:"flex-end",flexDirection:"row",paddingBottom:"4%"}}>
          <Image
            style={{alignSelf:"flex-start", margin:"2%", width: normalize(30), height:normalize(30)}}
            resizeMode="contain"
            source={require('./images/search.png')}/>
             <Image
            style={{alignSelf:"flex-end", width: normalize(30), height:normalize(30)}}
            resizeMode="contain"
            source={require('./images/icon6.png')}/>
          </View>
          </View>
          <View>
            <Text style={{opacity:0.7,padding:"4%",fontSize:normalize(16)}}>Popular</Text>
            <View>
              {popularArr.map((text,i)=>(
                  <View key={i} style={{flexDirection:"row",width:screenWidth}}>
                  <Image
                 style={{alignSelf:"flex-start", width: normalize(25), height:normalize(25),marginLeft:"5%",marginTop:"3%"}}
                 resizeMode="contain"
                 source={require('./images/icon7.png')}/>
                  <View key={i} style={{alignSelf:"stretch", width:"80%", marginLeft:"2%",opacity:0.8}}>
                  <Text style={{fontSize:normalize(18),flexWrap:"wrap", lineHeight:normalize(35)}}>{text}</Text>
                  {i===1||i===0?<Text style={{borderBottomWidth:1,opacity:0.2}}></Text>:<Text></Text>}
                  </View>             
                    </View>
              ))}
            </View>
            <View style={{width:"100%"}}>
            <Text style={{borderBottomWidth:1,opacity:0.2}}></Text>
            <Text style={{color:"#007BFF", fontSize:normalize(19), paddingTop:"5%", paddingLeft:"5%"}}>BROWSE ALL FAQ</Text>
            </View>
            <Text style={{borderBottomWidth:1,opacity:0.2,width:"100%"}}></Text>
            <View>
            <Text style={{opacity:0.7,padding:"4%",fontSize:normalize(16)}}>Contact Us</Text>
            <View>
              {contactUs.map((cnt,i)=>(
                  <View key={i} style={{flexDirection:"row",width:screenWidth}}>
                  <Image
                 style={{alignSelf:"flex-start", width: normalize(25), height:normalize(25),marginLeft:"5%",marginTop:"2%"}}
                 resizeMode="contain"
                 source={cnt.image}/>
                  <Text style={{fontSize:normalize(18),flexWrap:"wrap",marginLeft:"2%", lineHeight:normalize(35)}}>{cnt.text}</Text>
                    </View>
              ))}
            </View>
            </View>
            <Text style={{borderBottomWidth:1,opacity:0.2,width:"100%"}}></Text>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
header:{
  width:screenWidth,
  height:"10%",
  flexDirection:"row",
  justifyContent: "space-between",
  alignItems:"center",
  backgroundColor:"#007BFF"
}
});
    