import * as React from 'react';
import { Text, View, StyleSheet,Image, Dimensions, ScrollView } from 'react-native';
import normalize from 'react-native-normalize';

const screenWidth = Math.round(Dimensions.get('window').width)
const screenHeight = Math.round(Dimensions.get('window').height)
export default class MyProduct extends React.Component {
  render() {
    var productArray=[
      {image: require('./images/product1.png'), name:"Sony 24 inches Bravia HD LED TV (Black)"},
      {image: require('./images/product2.png'), name:"Canon Eos 1300D 18MP Digital SLR Camera (Black)"},
      {image: require('./images/product3.png'), name:"Lenovo Ideapad 320E-15ISK 320E 15.6-inch Laptop (Onyx Black)"},
      {image: require('./images/product4.png'), name:"Philips BT64B Portable Bluetooth Speakers (Black)"},
      {image: require('./images/product5.png'), name:"LG 7 kg Fully-Automatic Front Loading Washing Machine"},
      {image: require('./images/product6.png'), name:"DJI Mavic Pro with Fly More Combo"},
      {image: require('./images/product7.png'), name:"VERO | Infuso Black | Coffee Machine"},
      {image: require('./images/product8.png'), name:"Powermax Fitness TDM-100M Motorized Multifunction Treadmill with Auto Lubrication"}
    ];
    return (
          <View style={styles.scroolViewCSS}>
          <View style={styles.header}>
          <View style={{alignSelf:"flex-start",flexDirection:"row",paddingTop:"4%"}}>
          <Image
            style={{alignSelf:"flex-start",marginLeft:"4%",marginTop:"3%", width: normalize(22), height:normalize(22)}}
            resizeMode="contain"
            source={require('./images/icon5.png')}/>
          <Text style={{color:"white",fontWeight:"bold",paddingLeft:"3%", fontSize:normalize(25)}}>My Products</Text>
          <Image
            style={{alignSelf:"flex-start", margin:"2%", width: normalize(30), height:normalize(30)}}
            resizeMode="contain"
            source={require('./images/delete.png')}/>
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
          <ScrollView>
          <View style={styles.itemParent}>
            {productArray.map((value,index)=>
            <View key={index} style={styles.itemDisplay}>
              <Image
            style={{alignSelf:"center", width: normalize(110), height:normalize(110)}}
            resizeMode="contain"
            source={value.image}/>
            <Text style={{flexWrap:"wrap", alignSelf:"center",padding:"2%"}}>{value.name}</Text>
                <View style={{flexDirection:"row",width:"100%",fontSize:normalize(15), justifyContent:"space-between",alignItems:"center"}}>
                    <View style={{flexDirection:"row",padding:"2%",justifyContent:"flex-start"}}>
                    <Text style={styles.circle}></Text>
                    <Text style={{paddingLeft:"4%"}}>Post Active</Text>
                    </View>
                    <Text style={{color:"#007BFF",fontWeight:"bold", justifyContent:"flex-end"}}>EDIT</Text>
                    </View>
                </View>
            )}
          </View>
          </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemParent:{
    flex:1,
    flexDirection:"row",
    flexWrap: "wrap",
    borderWidth:2
  },
  scroolViewCSS:{
   flex:1,
   height:screenHeight
    },
header:{
  width:screenWidth,
  flexDirection:"row",
  height:"10%",
  justifyContent: "space-between",
  alignItems:"center",
  backgroundColor:"#007BFF"
},
itemDisplay:{
    justifyContent:"center",
    width:"50%",
    padding:"3%",
    flexDirection:'column',
    borderWidth:1, 
    borderColor: "#B8B8B8",
    backgroundColor:"white"
},
circle:{
  backgroundColor:"#32CD32",
  borderColor:"black",
  borderWidth:1,
  top:"5%",
  left:"15%",
  width:normalize(14),
  height:normalize(14),
  borderRadius:normalize(14)/2
}
});
    