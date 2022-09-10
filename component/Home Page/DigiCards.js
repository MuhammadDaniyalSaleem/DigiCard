import React from 'react';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { TextColor,ShopColor,PhoneColor,WorkColor, ProfileColor,TextHeader,MainScreenColor } from '../color/Allcolor';
import {StyleSheet,View,Dimensions,Text, Pressable}from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height; 
const DigiCard =({navigation})=>{
return(
  <View>
    <View style={styles.main}>
    <Text style={styles.cards}>DigiCards</Text>

  </View>
<View style={styles.container}>
  
<View style={[styles.custom,{marginTop:40}]}>
  
 <Pressable style={styles.shop}  
 
 onPress={() =>
        navigation.navigate('Shop')
      }>
        <Icon name="shopping-store" size={60} color="white" />
        <Text style={styles.text}>See Shop</Text>
        <Text style={{color:TextColor,textAlign:"center",fontSize:18}} >see ower shop to purchase </Text>
 </Pressable>
  <Pressable style={styles.Phone} onPress={() =>
        navigation.navigate('Phone')
      }>
        <Icon name="phone" size={60} color="white" />
        <Text style={styles.text}>Phone</Text>
        <Text style={{color:TextColor,textAlign:'center',fontSize:18}} >see ower shop to purchase </Text>
 </Pressable>
</View>
<View style={styles.custom}>
 <Pressable style={styles.Work} onPress={() =>
        navigation.navigate('Work')
      }>
        <Entypo name="video" size={60} color="white" />
        <Text style={styles.text}>Tutorial</Text>
        <Text style={{color:TextColor,textAlign:"center",fontSize:18}} >see the tutorial </Text>
</Pressable>
<Pressable style={styles.profile} onPress={() =>
        navigation.navigate('Profile')
      }>
<AntDesign name="profile" size={60} color="white" />
<Text style={styles.text}>Profile</Text>
<Text style={{color:TextColor ,textAlign:"center",fontSize:18}} >see ower shop to purchase </Text>
</Pressable>
 </View>
 
</View>    
</View>  

      
    )}
export default DigiCard;
const styles=StyleSheet.create({
container:{
width:windowWidth,
height:windowHeight,
backgroundColor:MainScreenColor
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
custom:{
 width:windowWidth,
 height:windowHeight/2.7,
 flexDirection:'row',
 justifyContent:"center",
 alignItems:"center",
},
shop:{
  width:windowWidth/2,
  height:windowHeight/2.8,
  backgroundColor:ShopColor,
  justifyContent:"center",
  alignItems:'center',
 borderRadius:20,
 shadowColor: "#000",
 shadowOffset: {width: 0,height: 2,},
 shadowOpacity: 0.25,
 shadowRadius: 5,
 
 elevation: 10,
 
},
Phone:{
  width:windowWidth/2.5,
  height:windowHeight/2.8,
  backgroundColor:PhoneColor,
  marginLeft:10,
  justifyContent:"center",
  alignItems:"center",
  borderRadius:20,
  shadowColor: "#000",
  shadowOffset: {width: 0,height: 2,},
  shadowOpacity: 0.25,
  shadowRadius: 5,
  
  elevation: 10,
},
Work:{
  width:windowWidth/2.5,
  height:windowHeight/2.8,
  backgroundColor:WorkColor,
  justifyContent:"center",
  alignItems:"center",
  borderRadius:20,
  shadowColor: "#000",
  shadowOffset: {width: 0,height: 2,},
  shadowOpacity: 0.25,
  shadowRadius: 5,
  elevation: 10,
  
},
profile:{
  width:windowWidth/2,
  height:windowHeight/2.8,
  backgroundColor:ProfileColor,
  marginLeft:10,
  justifyContent:"center",
  alignItems:"center",
  borderRadius:20,
  shadowColor: "#000",
 shadowOffset: {width: 0,height: 2,},
 shadowOpacity: 0.25,
 shadowRadius: 5,
 elevation: 10,
},
text:{
  color:TextColor,
  fontSize:23,
  textAlign:"center",
  fontWeight:'bold',
  marginTop:5,
  textDecorationLine:'underline',
},

})
