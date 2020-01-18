import * as React from 'react';
import { Text, View, StyleSheet,Image, Dimensions,Picker } from 'react-native';
import normalize from 'react-native-normalize';
import { Dropdown } from 'react-native-material-dropdown';


const screenWidth = Math.round(Dimensions.get('window').width)
const screenHeight = Math.round(Dimensions.get('window').height)
export default class AddProduct extends React.Component {
  constructor(props){
    super(props);
    this.state={
      categorySelected:""
    }
  }
  render() {
    var category=[
      {type:"Select Category", arrCategory:[1,2]},
      {type:"Select Subcategory", arrCategory:[1,2]},
      {type:"Select Product Type", arrCategory:[1,2]}
    ]
    var data=[1,2]
    return (
      <View style={{height:screenHeight,width:screenWidth, backgroundColor:"white"}}>
          <View style={styles.header}>
          <View style={{alignSelf:"flex-start",flexDirection:"row",paddingTop:"5%"}}>
          <Image
            style={{alignSelf:"flex-start",marginLeft:"4%",marginTop:"3%", width: normalize(23), height:normalize(23)}}
            resizeMode="contain"
            source={require('./images/close.png')}/>
          <Text style={{color:"white",fontWeight:"bold",paddingLeft:"3%", fontSize:normalize(25)}}>Add Product</Text>
          </View>
          <View style={{alignSelf:"flex-end",flexDirection:"row",paddingBottom:"3%"}}>
          <Image
            style={{alignSelf:"flex-start", margin:"2%", width: normalize(30), height:normalize(30)}}
            resizeMode="contain"
            source={require('./images/delete.png')}/>
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
          <Text style={{color:"#007BFF", fontSize:normalize(19), paddingTop:"5%", paddingLeft:"5%"}}>Add Category</Text>
          <View style={{flexDirection:"row",
                        textAlign:"center",
                        alignSelf:"center"}}>
           <Text style={styles.circle}></Text>
           <Text style={styles.progressbar}></Text>
         </View>
         <Dropdown
        label='Favorite Fruit'
        data={data}
      />
         <Text style={{borderBottomWidth:1,opacity:0.2,width:"90%",alignSelf:"center"}}></Text>
         <Text style={styles.continueButton} onPress={() => Alert.alert('passwd  and email entered')}>CONTINUE</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circle:{
    backgroundColor:"#6A4DFF",
    left:"5%",
    top:"3%",
    shadowColor: '#DCD5FF',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,  
    elevation: 2,
    width:normalize(20),
    height:normalize(20),
    borderRadius:normalize(20)/2
  },
  header:{
    width:screenWidth,
    height:"10%",
    flexDirection:"row",
    justifyContent: "space-between",
    alignItems:"center",
    backgroundColor:"#007BFF"
  },
  progressbar:{
    borderRadius:normalize(10),
    marginTop:"4%",
    backgroundColor:"#959DAD",
    width:"83%",
    height:normalize(7)
  },
  continueButton:{
    width: "88%",
    textAlignVertical:"center",
    textAlign:"center",
    color:"white",
    fontSize: normalize(18),
    lineHeight: normalize(48),
    height:normalize(50),
    marginTop: normalize(20),
    alignSelf:"center",
    backgroundColor: "#007BFF"
  }
});
    