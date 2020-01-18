import * as React from 'react';
import { Text, View, StyleSheet,Image, Dimensions } from 'react-native';
import normalize from 'react-native-normalize';


const screenWidth = Math.round(Dimensions.get('window').width)
const screenHeight = Math.round(Dimensions.get('window').height)
export default class UserProfile extends React.Component {
  render() {
      var productArray=[
    {image: require('./images/product-booked.png'), name:"Canon EOS 80D Digital",purchaseDate:"20 Sept 2018",price:"₹2499/Day"},
    {image: require('./images/product-booked.png'),name:"Canon EOS 80D Digital",purchaseDate:"20 Sept 2018",price:"₹2499/Day"},
    {image: require('./images/product-booked.png'),name:"Canon EOS 80D Digital",purchaseDate:"20 Sept 2018",price:"₹2499/Day"},
    {image: require('./images/product-booked.png'),name:"Canon EOS 80D Digital",purchaseDate:"20 Sept 2018",price:"₹2499/Day"}
  ];
    return (
      <View style={{height:normalize(800)}}>
          <View style={{height:"30%",backgroundColor:"#6A4DFF"}}>
          <Image
            style={{alignSelf:"flex-start", margin: normalize(12), width: normalize(22), height:normalize(20)}}
            resizeMode="contain"
            source={require('./images/icon5.png')}
        />
          <View style={{ justifyContent:"center",flex:1,alignItems:"center"}}>
            <Image
            style={{alignSelf:"center", width: normalize(70), height:normalize(65)}}
            resizeMode="contain"
            source={require('./images/user3.png')}
        />
        <Text style={{ color:"white", fontSize:normalize(22), fontWeight:"bold",lineHeight:normalize(30)}}>Sarah Silver</Text>
        <Text style={{ color:"white",lineHeight:normalize(30)}}>Joined on 08 Aug 2018</Text>
        <View style={{backgroundColor:"white", flexDirection:"row", paddingLeft:normalize(9),paddingRight:normalize(9)}}>
        <Image
            style={{alignSelf:"flex-start", width: normalize(28), height:normalize(28)}}
            resizeMode="contain"
            source={require('./images/icon14.png')}/>
        <Text style={{color:"#6A4DFF",fontSize:normalize(18)}}>Verified</Text>
        </View>  
        </View>
          </View>
        <View style={{height:"70%"}}>
        <Text style={{padding:normalize(15)}}>Previously Booked</Text>
        <View style={styles.productCards}>{productArray.map((product,i)=>
            <View key={i} style={styles.productCardData}>
                        <Image
                        style={{alignSelf:"center", width: normalize(70), height:normalize(65)}}
                        resizeMode="contain"
          source={product.image}
        />
                <Text style={{alignSelf:"center",fontWeight: "bold",lineHeight:normalize(30)}}>{product.name}</Text>
                <Text style={{alignSelf:"center",lineHeight:normalize(20)}}>{product.purchaseDate}</Text>
                <Text style={{alignSelf:"center",color:"#007BFF",fontSize:normalize(18),lineHeight:normalize(20)}}>{product.price}</Text>              
            </View>)}
            </View>
       </View> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  productCardData:{
    justifyContent:"center",
    flexDirection:'column',
    shadowColor: 'rgba(0,0,0,0.2)',
    backgroundColor: "white",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 5,  
    elevation: 18,
    height: normalize(170),
    margin: normalize(20),
    padding: normalize(10)
  },
  productCards:{
      display: "flex",
     flexDirection:"row",
     flexWrap: "wrap"
  }
});
    