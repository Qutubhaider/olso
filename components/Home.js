import React from 'react';
import {
    StyleSheet,
    View,
    Button,
    Alert,
    Text,
    TouchableOpacity
} from 'react-native';
import SignIn from './SignIn'
import SignUp from './SignUp'
import normalize from 'react-native-normalize';

export default class Home extends React.Component {
constructor(props){
  super(props);
  this.state={
    signInVisible: true,
    signUpVisible: false
  }
}

 render(){
   const {...currState}= this.state;
 return (
    <View style={styles.loginform}>
      <View style={styles.navbar}>
          <Text
          style={[styles.textInputButton,currState.signInVisible?styles.textInputButtonActive:null]}
          onPress={() => currState.signUpVisible?this.setState({signInVisible:true,signUpVisible:false}):null}>
            SIGN IN
          </Text>
		        <Text style={{borderLeftWidth:1,height:normalize(42),marginTop:normalize(18),color:"#ebedef"}}></Text>
            <Text
          style={[styles.textInputButton,currState.signUpVisible?styles.textInputButtonActive:null]}
          onPress={() => currState.signInVisible?this.setState({signInVisible:false,signUpVisible:true}):null}>
          SIGN UP
          </Text>
        </View>
        <View style={styles.externalComponent}>
        {currState.signInVisible?<SignIn />:null}
        {currState.signUpVisible?<SignUp />:null}
        </View>
      <Text style={styles.continueButton} onPress={() => Alert.alert('passwd  and email entered')}>CONTINUE</Text>
    </View>
        );
    }
  } 

const styles = StyleSheet.create({
   navbar:{
    flexDirection:"row",
    margin:normalize(20),
    shadowColor: 'rgba(0,0,0,0.2)',
    backgroundColor: "white",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 2,  
    elevation: 5,
    borderWidth:1,
    justifyContent:"space-evenly",
    height: normalize(60),
    width:"90%"
   },
   forgotPasswd: {
   opacity: 0.6,
   textAlign:"center"
    },
    textInputButton:{
      opacity: 0.4,
      lineHeight:normalize(60),
      fontSize: normalize(20),
      flex:1,
      textAlign:"center"
  },
  externalComponent:{
    width:"100%"
  },
  textInputButtonActive:{
    opacity:1,
    borderBottomColor: "#007BFF",
    color: "black",
    borderBottomWidth: 2
  },
  loginform:{
    alignItems:"center"
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


