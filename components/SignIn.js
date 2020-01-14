import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Button,
    Alert,
    Modal,
    TouchableHighlight
} from 'react-native';

  export  default  class SignIn extends React.Component{
      constructor(){
          super();
        this.state={
            enterEmail:'',
            enterPasswd:'',
            modalVisible: false,
            passwdFieldActive: false,
            emailFieldActive: false
          }
      }

        setModalVisible(visible) {
        this.setState({modalVisible: visible});
        }  
        inputEmailChangeHandler=(text)=>{
        this.setState({enterEmail:text})
        }
        inputPasswdChangeHandler=(text)=>{
            this.setState({enterPasswd:text})
        }  
   render(){
        return <View style={styles.textInputForm}>
                <TextInput
                style={this.state.emailFieldActive?styles.textInputActive:styles.textInput}
                placeholder = "Email" 
                onFocus={()=>this.setState({emailFieldActive:true})}
                onBlur={()=>this.setState({emailFieldActive:false})}
                onChangeText={this.inputEmailChangeHandler}
                value={this.state.enterPhone}
                textContentType={"emailAddress"}
                />
                <TextInput
                style={this.state.passwdFieldActive?styles.textInputActive:styles.textInput}
                onChangeText={this.inputPasswdChangeHandler}
                secureTextEntry={true} 
                placeholder = "Password"
                onFocus={()=>this.setState({passwdFieldActive:true})}
                onBlur={()=>this.setState({passwdFieldActive:false})}
                value={this.state.enterPasswd}
                />
                <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.modalVisible}>
                <View style={styles.overlay}>
                <View style={styles.overlayContent}>
                <View style={{margin:20}}>
                <Text>Please enter your registered Email ID. We will send you a link to recover your account.</Text>
                 <TextInput
                style={this.state.emailFieldActive?styles.textInputActive:styles.textInput}
                placeholder = "Email" 
                onFocus={()=>this.setState({emailFieldActive:true})}
                onBlur={()=>this.setState({emailFieldActive:false})}
                onChangeText={this.inputEmailChangeHandler}
                value={this.state.enterPhone}
                textContentType={"emailAddress"}
                />
                <View style={{flexDirection:'row',justifyContent:"space-evenly"}}>
                <Text onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
                }}>Close</Text>
                <Button
                title="CONTINUE"
                style={styles.button}
                onPress={() => Alert.alert('Password reset mail is sent')}
                />
                </View> 
                </View>
                </View>
                </View>
                </Modal>
                <TouchableHighlight
                onPress={() => {
                this.setModalVisible(true);
                }}>
                <Text style={styles.forgotPasswd}>Forgot Password?</Text>
                </TouchableHighlight>
                </View>
  }
}
const styles = StyleSheet.create({
    forgotPasswd: {
        textAlign:"center",
        opacity: 0.4,
        marginTop:20,
        fontSize: 15
    },
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
        },
    overlay:{
        flex:1,
        justifyContent: "center",
        alignItems:"center",
        backgroundColor: "rgba(0,0,0,0.5)"
    },
    overlayContent:{
        backgroundColor: "white",
        margin: 10
    },
    textInputOverlay:{
        borderRadius:5,
        borderWidth: 1 
    }
 });
 
 
 