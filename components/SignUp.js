import React from 'react';
import normalize from 'react-native-normalize';
import {
    StyleSheet,
    View,
    TextInput
} from 'react-native';

  export  default  class SignUp extends React.Component{
      constructor(){
          super();
        this.state={
            enterEmail:'',
            enterPasswd:'',
            enterFullName:'',
            enterPhone:'' ,
            emailFieldActive:false,
            passwdFieldActive:false,
            fullNameFieldActive:false,
            phoneFieldActive:  false
          }
      }
        inputEmailChangeHandler=(text)=>{
        this.setState({enterEmail:text})
        }
        inputPasswdChangeHandler=(text)=>{
            this.setState({enterPasswd:text})
        }
        inputPhoneChangeHandler=(text)=>{
            this.setState({enterPhone:text})
        }
        inputNameChangeHandler=(text)=>{
            this.setState({enterFullName:text}) 
        }                
   render(){
   return <View style={styles.textInputForm}>
            <TextInput
             style={[styles.textInput,this.state.fullNameFieldActive?styles.textInputActive:null]}
            onChangeText={this.inputNameChangeHandler}
            placeholder = "Full Name"
            value={this.state.fullName}
            onFocus={()=>this.setState({fullNameFieldActive:true})}
            onBlur={()=>this.setState({fullNameFieldActive:false})}
            />
            <TextInput
              style={[styles.textInput,this.state.emailFieldActive?styles.textInputActive:""]}
            placeholder = "Email" 
            onChangeText={this.inputEmailChangeHandler}
            value={this.state.enterEmail}
            onFocus={()=>this.setState({emailFieldActive:true})}
            onBlur={()=>this.setState({emailFieldActive:false})}
            />
             <TextInput
             style={[styles.textInput,this.state.phoneFieldActive?styles.textInputActive:""]}
            onChangeText={this.inputPhoneChangeHandler}
            placeholder = "Phone"
            value={this.state.enterPhone}
            onFocus={()=>this.setState({phoneFieldActive:true})}
            onBlur={()=>this.setState({phoneFieldActive:false})}
            />
            <TextInput
             style={[styles.textInput,this.state.passwdFieldActive?styles.textInputActive:""]}
            onChangeText={this.inputPasswdChangeHandler}
            secureTextEntry={true} 
            placeholder = "Password"
            value={this.state.enterPasswd}
            onFocus={()=>this.setState({passwdFieldActive:true})}
            onBlur={()=>this.setState({passwdFieldActive:false})}
            />      
          </View>
  }
}
const styles = StyleSheet.create({
     textInputForm:{
     flexDirection:"column",
     justifyContent: "center",
     alignItems: "center"
     },
     textInput:{
        fontSize: normalize(18),
        lineHeight: normalize(48),
       backgroundColor: '#ebedef',
       borderRadius:normalize(5),
       margin: normalize(10),
       width: "88%",
       height:normalize(50)
    },
    textInputActive:{
        borderColor: "#007BFF",
        backgroundColor:"white",
        borderWidth: normalize(2)
    }
 });
 
 
 