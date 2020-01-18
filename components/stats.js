import * as React from 'react';
import { Text, View, StyleSheet,Image, Dimensions } from 'react-native';
import normalize from 'react-native-normalize';

const screenWidth = Math.round(Dimensions.get('window').width)
const screenHeight = Math.round(Dimensions.get('window').height)
export default class Stats extends React.Component {
  render() {
    var myProducts=[      
      { name:"Canon Eos 1300D 18MP Digital SLR Camera (Black)",id:"PROD002E5",price:2997},
      { name:"DJI Mavic Pro with Fly More Combo",id:"PROD002E5",price:2997},
      {name:"Lenovo Ideapad 320E-15ISK 320E 15.6-inch Laptop (Onyx Black)",id:"PROD002E5",price:2997}
    ];
    var leaderBoard=[      
      { name:"You",earning:92254},
      { name:"Neeraj Kumar",earning:112456},
      {name:"Bhavesh Joshi",earning:112157},
      {name:"Bhavesh Joshi",earning:112157},
      {name:"Sameer Kumar",earning:108795}
    ];
    var topSellingProducts=[      
      { name:"Scooter",city:""},
      { name:"DSLR",city:""},
      { name:"DJ Equipments",city:""},
      { name:"Sofa Set",city:""}
    ];
    const card=(array, columnOne, columnTwo)=>{
      return (<View style={styles.cardDesign}>
              <View style={{flexDirection:"row",justifyContent:"space-between",
              shadowColor: 'rgba(0,0,0,0.2)',  
              shadowColor: 'rgba(0,0,0,0.2)',
              backgroundColor: "white",
              height:normalize(50),
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.5,
              elevation: 2}}>
              <Text style={{justifyContent:"center",alignSelf:"center",marginLeft:"2%", fontSize:normalize(20)}}>{columnOne}</Text>
              <Text style={{justifyContent:"center",alignSelf:"center",marginRight:"2%", fontSize:normalize(20)}}>{columnTwo}</Text>
              <Image
            style={{alignSelf:"center",marginLeft:"4%", width: normalize(5), height:normalize(5)}}
            resizeMode="contain"
            source={require('./images/arrow-bottom.png')}/>
              </View>
      {array.map(((value,i)=>
       <View key={i} style={{flexDirection:"row", justifyContent:"space-between",backgroundColor:i%2!==0?"#ececee":"white",lineHeight:normalize(30)}}>
         <View style={{flexDirection:"row",width:"70%",marginLeft:"2%"}}>
            <Text style={value.id!=undefined?styles.blueNum:styles.blackNum}>{i+1}</Text>
              <View style={{flexDirection:"column"}}>
                <Text style={{flexWrap:"wrap",fontSize:normalize(18),
                alignSelf:"center"}}>{value.name}</Text>
                  {value.id!==undefined?<Text>{"ID: "+value.id}</Text>:<Text>{}</Text>}
              </View>
          </View>
          <Text style={{justifyContent:"flex-end",marginRight:"2%",fontSize:normalize(18)}}>{value.earning!=undefined?value.earning:value.price!=undefined?"₹  "+value.price:value.city!=undefined?value.city:""}</Text>
      </View>
      ))}
       {array.length>3?<Text style={{color:"#007BFF", fontSize:normalize(19), padding:"3%", alignSelf:"flex-end",marginRight:"2%"}}>See More</Text>:<Text>{}</Text>}
      </View>);
    }

    return (
      <View>
          <View style={styles.header}>
          <View style={{alignSelf:"flex-start",flexDirection:"row",paddingTop:"4%"}}>
          <Image
            style={{alignSelf:"center",marginLeft:"4%", width: normalize(22), height:normalize(22)}}
            resizeMode="contain"
            source={require('./images/icon5.png')}/>
          <Text style={{color:"white",fontWeight:"bold",paddingLeft:"3%", fontSize:normalize(25)}}>Stats</Text>
          </View>
          </View>
        <View style={{bottom:"10%"}}>
        <View>
        <Text style={{fontSize:normalize(22),padding:"4%",opacity:0.6}}>My Products</Text>
        {card(myProducts,"Today","Price")}
        </View>
        <View>
        <Text style={{fontSize:normalize(22),padding:"4%",opacity:0.6}}>Leaderboard</Text>
        {card(leaderBoard,"Today","Earning")}
        </View>
        <View>
        <Text style={{fontSize:normalize(22),padding:"4%",opacity:0.6}}>Top Selling Products</Text>
        {card(topSellingProducts,"Today","City")}
        </View>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
header:{
  width:screenWidth,
  height:"5%",
  flexDirection:"row",
  justifyContent: "space-between",
  alignItems:"center",
  backgroundColor:"#007BFF",
  marginBottom:"30%"
},
blueNum:{
  color:"#007BFF", 
  fontSize:normalize(25), 
  paddingTop:"5%", 
  alignSelf:"center",
  padding:"2%"
},
blackNum:{
  fontSize:normalize(19),  
  alignSelf:"center",
  opacity:0.5,
  marginRight:"5%"
},
cardDesign:{
  justifyContent:"center",
  alignSelf:"center",
  flexDirection:'column',
  shadowColor: 'rgba(0,0,0,0.2)',
  backgroundColor: "white",
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.5,
  shadowRadius: 5,  
  elevation: 10,
  width:"88%"
}
});
    