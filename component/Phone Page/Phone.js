 import React,{useState,useEffect} from 'react';
 import axios from 'axios';
 import { NavigationContainer } from '@react-navigation/native';
 import {
   StyleSheet,
   FlatList,
   SafeAreaView,
   View,
   Text,
   TextInput,
   Icon,
   Image,
   Button,
   Alert,
   TouchableHighlight,
   Dimensions,
   Pressable,
   ScrollView ,
   onPressFunction
 } from 'react-native';

 const windowWidth = Dimensions.get('window').width;
   const windowHeight = Dimensions.get('window').height;  
 const Phone= ({navigation})=> {
  const [data, setData]= useState([])
  const getData = ()=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
    setData(res.data)
  

    }).catch((err)=>{
console.log(err)
    })
  }

  useEffect(() => {
getData()
})


const main=({item}) =>(
<View style={styles.container}>
  <View style={{margin:10}}>
  <Text style={styles.id}>{item.id}</Text>  
<Text style={styles.title}>{item.title}</Text>
<Text style={styles.body}>{item.body}</Text>
</View>

</View>
)

return(
<SafeAreaView style={{alignItems:'center',backgroundColor:"rgba(206, 200, 200, 0.8)"}}>
<View style={styles.header}>
 <Text style={styles.para}>Paragraphs</Text>
   </View>
  <FlatList
 
  data={data}
  renderItem={main}
  />
</SafeAreaView>

 )
 }
 export default Phone;
 const styles=StyleSheet.create({

header:{
width:windowWidth,
height:windowHeight/10,
backgroundColor:"#0d47a1",
alignItems:'center',
justifyContent:'center'
},
container:
{
width:windowWidth/1.1,
minHeight:windowHeight/5,
maxHeight:windowHeight/3,
backgroundColor:'#FFF',
borderRadius:10,
elevation:2,
margin:10
},
id:{
fontSize:20,
fontWeight:"bold" ,
alignSelf:"center" 
},
title:{
  fontSize:15,
  fontWeight:"bold",
  textAlign:'center',
},
body:{
  fontSize:12,
textAlign:'center'  
},
inline:{
  margin:20,
  justifyContent:'space-between',
  flexDirection:'row',
  
},
comment:{ 
  color:"#0d47a1"
},
para:{
  fontSize:22,
  color:"#FFF",
  fontWeight:'bold',
}

})
 
