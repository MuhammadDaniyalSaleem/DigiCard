import React from 'react';
import { ButtonColor, SeeButtonColor, CardBackgroundColor, ButtonBorderColor, ShopScreenColor, TextColor, IndexColor, WorkColor, MainScreenColor } from '../color/Allcolor';
import { StyleSheet, ActivityIndicator, Image, Dimensions, View, Pressable, Text, TouchableOpacity, FlatList, Modal, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import baseURLImg from '../baseURLImg';
import DescriptionModal from './Modal';
import { SafeAreaView } from 'react-native-safe-area-context';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Shop = ({ navigation }) => {
  const [index, setIndex] = useState("card");
  const [modalVisible, setModalVisible] = useState(false);
  const [shopItems, setShopeItems] = useState([]);
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false)
 



  function changeState() {
    setModalVisible(!modalVisible)
  }
  const showImage = require("../../image/images.jpg");

  function getData() {
    setLoading(true)
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("https://digicardapis.khannburger.com/api/getallitems", requestOptions)
     
    .then(response => response.json())
    
    .then(result => {
        setLoading(false)

        setShopeItems(result.items)
      })
      .catch(error => console.log('error', error));
  }
  

  useEffect(() => {
    getData()
  }, [])

  
  const main = ({ item }) => (
    
      shopItems.length>=1 ?
   
    
    
    <View style={styles.card}>
      <Image style={styles.image} source={item.item_pic != "default" ? { uri: `${baseURLImg}${item.item_pic}` } : showImage}
      />

<Pressable style={styles.see}  >
    <View style={{ flexDirection: "row",justifyContent:"center",alignItems:"center" }}>
          <Text style={styles.type}>Name :</Text>
          <Text style={styles.name}>{item.item_name} </Text>
          <Text style={[styles.type,{ marginLeft:10}]}>Prices :</Text>
          <Text style={styles.name}>{item.item_price}</Text>
        </View>
        <Text onPress={() => {
          setModalVisible(true)
          setData(item)
        }} style={styles.order} >See Details</Text>
      </Pressable>
    </View>
:
<Text>NO Data </Text>
  )

  
  
  return (
    
    

    <View style={styles.container}>
      <View style={styles.shop}>
        <Text style={styles.Now}>Shop Now</Text>
      </View>
      <TouchableOpacity style={styles.main}>
        <Pressable onPress={() => setIndex("card")} style={[styles.btn, { backgroundColor: index === "card" ? IndexColor : ButtonColor }]} >
          <Text style={styles.text} >Cards</Text>
        </Pressable>
        <Pressable onPress={() => setIndex("tattoos")} style={[styles.btn, { backgroundColor: index === "tattoos" ? IndexColor : ButtonColor }]} >
          <Text style={styles.text}>Tattoos</Text>
        </Pressable>
        <Pressable onPress={() => setIndex("jewel")} style={[styles.btn, { backgroundColor: index === "jewel" ? IndexColor : ButtonColor }]} >
          <Text style={styles.text} >Jewel</Text>
        </Pressable>
      </TouchableOpacity>
      <SafeAreaView 
      style={styles.safeview}
      >
        {
          loading === true ?
            <ActivityIndicator size={100} color="#b69efe"  />
            : 
            <FlatList
              data={shopItems}
              renderItem={main}
            />

            
          }

      </SafeAreaView>
      <DescriptionModal
        showdata={modalVisible}
        changeState={changeState}
        data={data}
        navigation={navigation}
      />
    </View>

  )
}



export default Shop;
const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: ShopScreenColor,
    alignItems: "center"
  },
  shop: {
    width: windowWidth,
    height: windowHeight / 12,
    backgroundColor: WorkColor,
    justifyContent: "center",
    alignItems: "center"
  },
  Now: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: TextColor
  },
  main: {
    width: windowWidth,
    height: windowHeight / 17,
    color: ShopScreenColor,
    flexDirection: "row",
    justifyContent: 'space-evenly',
    marginTop: 10
  },
  btn: {
    width: windowWidth / 3.7,
    height: windowHeight / 13,
    alignItems: "center",
    justifyContent: "center",
    opacity: 1,
    borderWidth: 2,
    borderColor: ButtonBorderColor,
    borderRadius: 10,

  },
  text: {
    color: TextColor,
    fontSize: 18,
    fontWeight: '700'
  },
  card: {
    width: windowWidth / 1.2,
    height: windowHeight / 2.4,
    backgroundColor: CardBackgroundColor,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: "center",
    borderRadius: 20

  },
  image: {
    width: windowWidth / 1.4,
    height: windowHeight / 3.5,
    borderRadius: 10,

  },
  name: {
    fontSize: 17,
    marginLeft: 5,
    color: TextColor

  },
  type: {
    fontSize: 17,
    marginLeft: 0,
    color: TextColor,
    
  },

  see: {
    width: windowWidth / 1.4,
    height: windowHeight / 13,
    backgroundColor: SeeButtonColor,
    borderRadius: 10,
    marginTop: 10,
    justifyContent:"center",
    alignItems:"center"
  },
  order: {
    fontSize: 17,
    color: TextColor,
    textDecorationLine:"underline"
  },
  safeview:{
    width:windowWidth,
    height:windowHeight/1.2,
    justifyContent:"center",
    alignItems:"center",
    flex:1,
    marginTop:20
  }

}) 