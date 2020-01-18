import * as React from 'react';
import { Text, View, StyleSheet,Image, Dimensions } from 'react-native';
import normalize from 'react-native-normalize';

const screenWidth = Math.round(Dimensions.get('window').width)
const screenHeight = Math.round(Dimensions.get('window').height)
export default class IndexUserInfo extends React.Component {
  constructor(){
    super();
    this.state={
      openNavBar: false
    }
  }
  render() {
var imageArr=[
  {image:require('./images/business-info1.png'),tittle:"My Products"},
  {image:require('./images/business-info2.png'),tittle:"Upcoming Bookings"},
  {image:require('./images/business-info3.png'),tittle:"Returning Products"},
  {image:require('./images/business-info4.png'),tittle:"My Payments"}
]
var prodArr=[ "Pebble Watch",
        "Milton Thermosteel Flip Lid Flask",
        "On-Ear Stereo Headphones",
        "Immersion Heater",
        "Single Door Refrigerator"
      ]

    return (
      <View style={styles.indexHtm}>
          <View style={[styles.header,{height:!this.state.openNavBar?normalize(60):normalize(190),flexDirection:"column"}]}>
            <View style={[styles.header,{ height:normalize(60),flexDirection:"row"}]}>
            <View>
            <Text onPress={()=>this.setState({openNavBar:!this.state.openNavBar})}
            style={styles.lineNavBar} >|||</Text>
            </View>
            <Text style={{color:"white",fontWeight:"bold", fontSize:normalize(25)}}>Home</Text>
            </View>
            <View style={{display:this.state.openNavBar?"flex":"none",alignSelf:"flex-start",marginLeft:normalize(15)}}>
            <Text style={{color:"white", fontSize:normalize(18),lineHeight:normalize(30)}}>Home</Text>
            <Text style={{color:"white",fontSize:normalize(18),lineHeight:normalize(30)}}>Profile</Text>
            <Text style={{color:"white",fontSize:normalize(18),lineHeight:normalize(30)}}>Booking History</Text>
            <Text style={{color:"white",fontSize:normalize(18),lineHeight:normalize(30)}}>Contact Support</Text>
            </View>
          </View>
          <View style={[styles.userInfo]}>
          <Image
            style={{alignSelf:"center",margin:normalize(10), width: normalize(70), height:normalize(65)}}
            resizeMode="contain"
            source={require('./images/user2.png')}
        />
              <View style={{flex:1,alignSelf:"center",padding:normalize(10)}}>
              <Text style={{fontSize:normalize(14)}}>Today's Earning</Text>
              <Text style={{fontSize:normalize(25)}}>{"₹  20,000"}</Text>
              <View style={{flexDirection:"row",width:"100%",flex:1}}>
                  <View style={{flexDirection:'column',alignSelf:"flex-start"}}>
                  <Text>This Week</Text>
                  <Text>{"₹ 20,000"}</Text>
                  </View>
                    <View style={{flexDirection:'column',alignSelf:"flex-end",marginLeft:"2%"}}>
                    <Text>This Month</Text>
                  <Text >{"₹ 20,000"}</Text>
                </View>
             </View>
            </View>
            <Text style={{color:"#007BFF",fontWeight:"bold",padding:normalize(20), fontSize:normalize(15), justifyContent:"flex-end"}}>VIEW STATS</Text>
            </View>
          <View style={styles.productImages}>
          {imageArr.map((val,index)=>
          <View key={index} style={{flexDirection:"column",flex:1,justifyContent:"center",alignItems:"center"}}>
           <Image
           style={{alignSelf:"center",width: normalize(50),padding:normalize(20), height:normalize(50)}}
           resizeMode="contain"
           source={val.image}/>
          <Text style={{flexWrap:"wrap",padding:normalize(5),textAlign:"center"}}>{val.tittle}</Text>
          </View>
          )}</View>
          <View style={styles.liveSearch}>
            <View style={{padding:normalize(15),width:"100%"}} >
            <View style={[styles.rowClass,{justifyContent:"flex-start"}]}>
            <Image
            style={{alignSelf:"center", width: normalize(35), height:normalize(35)}}
            resizeMode="contain"
            source={require('./images/stats.png')}/>
            <Text style={{opacity:0.8,fontSize:normalize(20),marginLeft:"8%"}}>Live Search</Text>
            </View>
            <Text style={{borderBottomWidth:1,opacity:0.2,width:"100%"}}></Text>
            </View>
          {prodArr.map((val,i)=>
          <View key={i} style={[styles.rowClass,{justifyContent:"space-between",backgroundColor:i%2!==0?"#ececee":"white"}]}>
          <Text style={{opacity:0.8,fontSize:normalize(16),padding:normalize(15)}}>{val}</Text>
           <Text style={{color:"#007BFF",fontSize:normalize(16), justifyContent:"flex-end",padding:normalize(15)}}>offer</Text>
          </View>
          )}
           <Text style={{color:"#007BFF",fontSize:normalize(20), justifyContent:"center",padding:normalize(15)}}>See More</Text>
          </View>
          </View> 
    );
  }
}

const styles = StyleSheet.create({
  header:{
    width:screenWidth,
    justifyContent: "flex-start",
    alignItems:"center",
    backgroundColor:"#007BFF"
  },
  lineNavBar:{
    fontSize:normalize(25),
    fontWeight:"bold",
    transform: [{ rotate: '90deg'}],
    color:"white",
    padding:normalize(15)
  },
  rowClass:{
    flexDirection:"row",
    flex:1,
    alignItems:"center"
  },
userInfo:{
  marginTop:normalize(20),
  justifyContent:"flex-start",
  alignSelf:"center",
  flexDirection:"row",
  shadowColor: 'rgba(0,0,0,0.2)',
  backgroundColor: "white",
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.5,
  shadowRadius: 5,  
  elevation: 10,
  width:"90%"
},
productImages:{
  marginTop:normalize(20),
  flexDirection:"row",
  shadowColor: 'rgba(0,0,0,0.2)',
  backgroundColor: "white",
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.5,
  shadowRadius: 5,  
  elevation: 10,
  justifyContent:"flex-start",
  alignSelf:"center",
  width:"90%",
  flex:1,
  padding:normalize(25)
},
indexHtm:{
 flexDirection:"column",
 justifyContent:"flex-start"
},
liveSearch:{
  marginTop:normalize(20),
  flexDirection:"column",
  shadowColor: 'rgba(0,0,0,0.2)',
  backgroundColor: "white",
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.5,
  shadowRadius: 5,  
  elevation: 10,
  justifyContent:"flex-start",
  alignSelf:"center",
  width:"90%",
  flex:1,
  padding:normalize(5),
  marginBottom:"25%" 
}
});
    