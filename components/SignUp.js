import React from 'react';
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
             style={this.state.fullNameFieldActive?styles.textInputActive:styles.textInput}
            onChangeText={this.inputNameChangeHandler}
            placeholder = "Full Name"
            value={this.state.fullName}
            onFocus={()=>this.setState({fullNameFieldActive:true})}
            onBlur={()=>this.setState({fullNameFieldActive:false})}
            />
            <TextInput
             style={this.state.emailFieldActive?styles.textInputActive:styles.textInput}
            placeholder = "Email" 
            onChangeText={this.inputEmailChangeHandler}
            value={this.state.enterEmail}
            onFocus={()=>this.setState({emailFieldActive:true})}
            onBlur={()=>this.setState({emailFieldActive:false})}
            />
             <TextInput
             style={this.state.phoneFieldActive?styles.textInputActive:styles.textInput}
            onChangeText={this.inputPhoneChangeHandler}
            placeholder = "Phone"
            value={this.state.enterPhone}
            onFocus={()=>this.setState({phoneFieldActive:true})}
            onBlur={()=>this.setState({phoneFieldActive:false})}
            />
            <TextInput
             style={this.state.passwdFieldActive?styles.textInputActive:styles.textInput}
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
        fontSize: 18,
        lineHeight: 48,
        backgroundColor: '#ebedef',
        borderRadius:5,
        margin: 10,
        width: 300,
        height:50
     },
     textInputActive:{
         borderColor: "#007BFF",
         backgroundColor:"white",
         borderWidth: 1,
         fontSize: 18,
         lineHeight: 48,
         borderRadius:5,
         margin: 10,
         width: 300,
         height:50
     }
 });
 
 
 