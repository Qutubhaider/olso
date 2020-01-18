import React, { Component } from 'react';
import Home from "./components/Home"
import UserProfile from "./components/user-profile"
import HelpSupport from "./components/Help&Support"
import Onboarding from "./components/onboarding"
import AddProduct from "./components/AddProduct"
import MyProduct from "./components/MyProduct"
import Stats from "./components/stats"
import IndexUserInfo from "./components/IndexUserInfo"
import NavigationDrawer from "./components/NavigationDrawer"
import Payment from './components/Payment';
import {
    StyleSheet,
    ScrollView,
    View
} from 'react-native';

export default class App extends Component {
    render() {
        return (
        <View style={styles.body}>
            {/*<View style={styles.wrapper}>
                  <ScrollView>
                 <Home />
                  </ScrollView>
        </View>*/}
             <ScrollView>
             {/*   <UserProfile />*/}
                 {/*<Stats/>*/}
                 {/*<IndexUserInfo/>*/}
             </ScrollView>
             {/*<MyProduct/>*/}
            {/*<NavigationDrawer/>*/}
            <Payment/>
                {/* <HelpSupport />*/}
           {/*<Onboarding />*/}
           {/*<AddProduct /> --need to take a look*/ }       
        </View>
        );
    }
}


const styles = StyleSheet.create({
    body:{
        backgroundColor:"#EBEDEF",
        flex:1,
        justifyContent: "center",
        alignItems:"center"
    },
    wrapper: {
       width: "100%",
        overflow: "hidden"
    }
});
