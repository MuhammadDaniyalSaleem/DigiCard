import React from 'react';
import { useState } from 'react';
import { ShopScreenColor,TextColor,WorkColor } from '../color/Allcolor';
import {StyleSheet,View,Dimensions,Text, Pressable}from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height; 
const Profile =({navigation})=>{
return(
<View style={styles.container}>
<View style={styles.main}>
<Text style={styles.cards}>DigiCards</Text>
</View>
</View>
  
  )}
    export default Profile;
const styles=StyleSheet.create({
container:{
 width:windowWidth,
 height:windowHeight,
 backgroundColor:ShopScreenColor,
 alignItems:"center"
},
    
main:{
 width:windowWidth,
 height:windowHeight/12,
 backgroundColor:WorkColor,
 justifyContent:"center",
 alignItems:"center"
},
cards:{
 textAlign:"center",
 fontSize:30,
 fontWeight:"bold",
 color:TextColor
},
})    