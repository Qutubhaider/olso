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
          style={currState.signInVisible?styles.textInputButtonActive:styles.textInputButton}
          onPress={() => currState.signUpVisible?this.setState({signInVisible:true,signUpVisible:false}):null}>
            SIGN IN
          </Text>
            <Text
          style={currState.signUpVisible?styles.textInputButtonActive:styles.textInputButton}
          onPress={() => currState.signInVisible?this.setState({signInVisible:false,signUpVisible:true}):null}>
          SIGN UP
          </Text>
        </View>
        {currState.signInVisible?<SignIn />:null}
        {currState.signUpVisible?<SignUp />:null}
      <TouchableOpacity style={styles.continueButton}>
      <Text style={{color:"white"}} onPress={() => Alert.alert('passwd  and email entered')}>CONTINUE</Text>
      </TouchableOpacity>
    </View>
        );
    }
  } 

const styles = StyleSheet.create({
   navbar:{
    flexDirection:"row",
    margin:20,
    shadowColor: 'rgba(0,0,0,0.2)',
    backgroundColor: "white",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 2,  
    elevation: 5,
    justifyContent:"space-evenly",
    height: 60,
    width:"90%"
   },
   forgotPasswd: {
   opacity: 0.6,
   textAlign:"center"
    },
    textInputButton:{
      opacity: 0.4,
      lineHeight:60,
      fontSize: 20,
      flex:1,
      textAlign:"center"
  },
  textInputButtonActive:{
    borderBottomColor: "#007BFF",
    color: "black",
    borderBottomWidth: 2,
    lineHeight:60,
    fontSize: 20,
    flex:1,
    textAlign:"center"
  },
  loginform:{
    alignItems:"center"
  },
  continueButton:{
    width: 300,
    height:50,
    marginTop: 20,
    justifyContent: "center",
    alignItems:"center",
    backgroundColor: "#007BFF"
  }
});


