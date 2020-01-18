import * as React from 'react';
import { Text, View, StyleSheet,Image, Dimensions,ImageBackground } from 'react-native';
import normalize from 'react-native-normalize';

const screenWidth = Math.round(Dimensions.get('window').width)
const screenHeight = Math.round(Dimensions.get('window').height)
export default class Payment extends React.Component {
  render() { 
    return (
      <View style={{height:screenHeight,backgroundColor:"white"}}>
         <View style={styles.header}>
          <View style={{alignSelf:"flex-start",flexDirection:"row",paddingTop:"4%"}}>
          <Image
            style={{alignSelf:"center",marginLeft:"4%", width: normalize(22), height:normalize(22)}}
            resizeMode="contain"
            source={require('./images/icon5.png')}/>
          <Text style={{color:"white",fontWeight:"bold",paddingLeft:"3%", fontSize:normalize(25)}}>Payment</Text>
          </View>
          </View>
          <View style={[{backgroundColor:"#ececee", height:"5%"},styles.rowClass]}>
          <Text style={styles.plainText}>Mon, 16 July to Sat, 21 July</Text>
          <View style={styles.rowClass}>
            <Text style={styles.plainText}>This Week</Text>
            <Image
            style={{alignSelf:"center",marginLeft:"2%", width: normalize(18), height:normalize(18)}}
            resizeMode="contain"
            source={require('./images/arrow-bottom.png')}/>
          </View>
          </View>
          <View style={{alignItems:"center",marginTop:"5%",flexDirection:"column",justifyContent:"flex-start",flex:1}}>
          <Image
            style={{alignSelf:"center", width: normalize(150), height:normalize(150)}}
            resizeMode="contain"
            source={require('./images/payment-img.png')}/>
            <Text style={styles.textDecorationliterals}>Total Payment Received</Text>
            <Text style={styles.textDecorationNum}>72,000</Text>
            <Text style={styles.textDecorationliterals}>No. of Payments</Text>
            <Text style={styles.textDecorationNum} >22</Text>
            <View style={styles.downloadButton}>
            <Image
            style={{ width: normalize(18),marginRight:"4%", height:normalize(18)}}
            resizeMode="contain"
            source={require('./images/icon12.png')}/>
            <Text style={styles.downloadText} onPress={() => Alert.alert('download Statement')}>DOWNLOAD STATEMENT</Text>
            </View>
            </View></View>
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
  },
  textDecorationliterals:{
    padding:normalize(15),
    fontSize:normalize(20),
    fontWeight:"bold"
  },
  plainText:{
    fontSize:normalize(17),
    textAlignVertical:"center"
  },
  textDecorationNum:{
    borderRadius:normalize(15),
    backgroundColor:"#E4EEFF",
    color:"#007BFF",
    paddingTop: normalize(10),
    paddingBottom: normalize(10),
    paddingLeft: normalize(25),
    paddingRight: normalize(25),
    fontSize:normalize(20)
  },
  rowClass:{
    flexDirection:"row",
    alignItems:"center",
    padding:"2%",
    fontSize:normalize(20),
    justifyContent:"space-between"
  },
  downloadText:{
    textAlignVertical:"center",
    textAlign:"center",
    color:"white",
    fontSize: normalize(18),
    lineHeight: normalize(48),
    alignSelf:"center"
  },
  downloadButton:{
    borderRadius:normalize(10),
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    alignSelf:"center",
    height:normalize(50),
    marginTop: normalize(20),
    backgroundColor: "#007BFF", 
    padding:normalize(10),
    width: "70%"
  }
});
    