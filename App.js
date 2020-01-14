import React, { Component } from 'react';
import Home from "./components/Home"
import {
    StyleSheet,
    View
} from 'react-native';;

export default class App extends Component {
    render() {
        return (
        <View style={styles.body}>
              <View style={styles.wrapper}>
                    <Home />
              </View>
        </View>
        );
    }
}


const styles = StyleSheet.create({
    body:{
        backgroundColor:"#fafafa",
        flex:1,
        justifyContent: "center",
        alignItems:"center"
    },
    wrapper: {
       width: "100%",
        overflow: "hidden"
    }
});
