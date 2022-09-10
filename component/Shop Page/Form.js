import React from 'react';
import { useState } from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign'
// import FontAwesome5Brands from 'react-native-vector-icons/FontAwesome5Brands';
import { ShopScreenColor, ButtonBorderColor, TextHeader, SecondEndFormColor, TextInputPlaceHolderColor, TextColor, WorkColor, FormScreenFirstView, ButtonColor } from '../color/Allcolor';
import { StyleSheet, ScrollView, View, Dimensions, Text, Pressable, TextInput } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Form = ({ navigation }) => {
  return (

    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.cards}>DigiCards</Text>
      </View>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* page title */}
        <View style={styles.first}>
          <Text style={styles.text}>Profile Information  </Text>
          <Text style={styles.infor}>Please Provide your information before ordering Your DigiCard</Text>
        </View>
        {/* Profile  */}
        <View style={styles.second} >
          <Text style={styles.name}>Name</Text>
          <TextInput style={styles.input} keyboardType="name-phone-pad" placeholder='Enter Your Full Name' placeholderTextColor={TextInputPlaceHolderColor} />
          <Text style={styles.name}>Phone Number</Text>
          <TextInput style={styles.input} keyboardType='phone-pad' placeholder='Enter Your Phone Number' placeholderTextColor={TextInputPlaceHolderColor} />
          <Text style={styles.name}>CNIC Number</Text>
          <TextInput style={styles.input} keyboardType='number-pad' placeholder='Enter Your CNIC Number' placeholderTextColor={TextInputPlaceHolderColor} />
          <Text style={styles.name}>Whatsapp Number</Text>
          <TextInput style={styles.input} keyboardType='phone-pad' placeholder='Enter Your Whatsapp Number' placeholderTextColor={TextInputPlaceHolderColor} />
          <Text style={styles.name}>Whatsapp Bussiness Number</Text>
          <TextInput style={styles.input} keyboardType='phone-pad' placeholder='Enter Your whatsapp Bussiness Number' placeholderTextColor={TextInputPlaceHolderColor} />
          <Text style={styles.name}>Address</Text>
          <TextInput style={styles.input} placeholder='NO file chosen' placeholderTextColor={TextInputPlaceHolderColor} />
          <Text style={styles.name}>Upload Profile Picture</Text>
          <TextInput style={styles.input} placeholder='NO file chosene' placeholderTextColor={TextInputPlaceHolderColor} />
          <Text style={styles.name}>Upload Cover Picture</Text>
          <TextInput style={styles.input} placeholder='NO file chosen' placeholderTextColor={TextInputPlaceHolderColor} />
        </View>


        {/* Socials  */}
        <View style={styles.forth}>
          <Text style={styles.social}>Socials</Text>
          {/* Facebook */}
          <View style={styles.third}>

            <Entypo style={styles.icon} name="facebook" size={33} color={TextColor} />
            <TextInput style={styles.link} placeholder='Paste Facebook Profile Link' placeholderTextColor={TextInputPlaceHolderColor} />
          </View>
          {/* Instagram */}
          <View style={styles.third}>
            <Entypo style={styles.icon} name="instagram" size={33} color={TextColor} />
            <TextInput style={styles.link} placeholder='Paste instagram Profile Link' placeholderTextColor={TextInputPlaceHolderColor} />
          </View>
          {/* twitter */}
          <View style={styles.third}>

            <Entypo style={styles.icon} name="twitter" size={33} color={TextColor} />
            <TextInput style={styles.link} placeholder='Paste Twitter Profile Link' placeholderTextColor={TextInputPlaceHolderColor} />
          </View>
          {/* Snapchat */}
          <View style={styles.third}>

            <MaterialCommunityIcons style={styles.icon} name="snapchat" size={33} color={TextColor} />
            <TextInput style={styles.link} placeholder='Enter Your Snapchat Id' placeholderTextColor={TextInputPlaceHolderColor} />
          </View>
          {/* telegram */}
          <View style={styles.third}>

            <Fontisto style={styles.icon} name="telegram" size={33} color={TextColor} />
            <TextInput style={styles.link} placeholder='Paste telegram Profile Link' placeholderTextColor={TextInputPlaceHolderColor} />
          </View>
          {/* TikTok */}
          <View style={styles.third}>

            {/* <FontAwesome5Brands  style={styles.icon}name="tiktok" size={33} color={TextColor}/>   */}
            <TextInput style={styles.link} placeholder='Paste Tiktok Profile Link' placeholderTextColor={TextInputPlaceHolderColor} />
          </View>
          {/* Skype */}
          <View style={styles.third}>

            <Entypo style={styles.icon} name="skype" size={33} color={TextColor} />
            <TextInput style={styles.link} placeholder='Paste Skype Profile Link' placeholderTextColor={TextInputPlaceHolderColor} />
          </View>
          {/* Pinterest */}
          <View style={styles.third}>

            <Entypo style={styles.icon} name="pinterest" size={33} color={TextColor} />
            <TextInput style={styles.link} placeholder='Paste Pinterest Profile Link' placeholderTextColor={TextInputPlaceHolderColor} />
          </View>
          {/* Email */}
          <View style={styles.third}>

            <MaterialCommunityIcons style={styles.icon} name="email" size={33} color={TextColor} />
            <TextInput style={styles.link} placeholder='Enter Your Email' placeholderTextColor={TextInputPlaceHolderColor} />
          </View>
        </View>
        {/* User Info */}
        <View style={styles.fifth} >
          <Text style={styles.social}>User info</Text>
          <Text style={styles.name}>Short Description</Text>
          <TextInput style={styles.input} keyboardType="name-phone-pad" placeholder='Enter Short Description' placeholderTextColor={TextInputPlaceHolderColor} />
          <Text style={styles.name}>Age</Text>
          <TextInput style={styles.input} keyboardType="number-pad" placeholder='Enter Your Age' placeholderTextColor={TextInputPlaceHolderColor} />
          <Text style={styles.name}>Religion</Text>
          <TextInput style={styles.input} keyboardType='name-phone-pad' placeholder='Enter Your Religion' placeholderTextColor={TextInputPlaceHolderColor} />
          <Text style={styles.name}>Rgion</Text>
          <TextInput style={styles.input} keyboardType='name-phone-pad' placeholder='Enter Your Region' placeholderTextColor={TextInputPlaceHolderColor} />
          <Text style={styles.name}>Bio</Text>
          <TextInput style={styles.bio} keyboardType='name-phone-pad' placeholder='Write your short bio' placeholderTextColor={TextInputPlaceHolderColor} />


        </View>
        {/* Professional Account */}
        <View style={styles.Sixth}>
          <Text style={styles.social}>Professional Account</Text>
          <View style={styles.third}>
            <AntDesign style={styles.icon} name="linkedin-square" size={33} color={TextColor} />
            <TextInput style={styles.link} placeholder='Paste Linkedin Profile Link' placeholderTextColor={TextInputPlaceHolderColor} />
          </View>
          <View style={styles.third}>
            <Entypo style={styles.icon} name="facebook" size={33} color={TextColor} />
            <TextInput style={styles.link} placeholder='Paste Github Profile Link' placeholderTextColor={TextInputPlaceHolderColor} />
          </View>
          <View style={styles.third}>

            <MaterialCommunityIcons style={styles.icon} name="stack-overflow" size={33} color={TextColor} />
            <TextInput style={styles.link} placeholder='Paste Stackoverflow Profile Link' placeholderTextColor={TextInputPlaceHolderColor} />
          </View>
          <View style={styles.third}>

            <Entypo style={styles.icon} name="facebook" size={33} color={TextColor} />
            <TextInput style={styles.link} placeholder='Paste Freelancing Profile Link' placeholderTextColor={TextInputPlaceHolderColor} />
          </View>
          <View style={styles.third}>

            <Text style={styles.cv}>CV </Text>
            <TextInput style={styles.link} placeholder='Paste Facebook Profile Link' placeholderTextColor={TextInputPlaceHolderColor} />
          </View>
        </View>

        <View style={styles.submit}>
          <Pressable style={styles.btn} >
            <Text style={styles.end} >Submit</Text>
          </Pressable>
        </View>
        <View style={styles.email}>
          <TextInput style={styles.last} placeholder="Enter Your Email" />
          <Pressable style={[styles.btn, { marginTop: 15 }]} >
            <Text style={styles.end} >Subscribe</Text>
          </Pressable>
        </View>






      </ScrollView>
    </View>

  )
}
export default Form;
const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: ShopScreenColor,
    alignItems: 'center',
    justifyContent: 'center'
  },

  main: {
    width: windowWidth,
    height: windowHeight / 12,
    backgroundColor: WorkColor,
    justifyContent: "center",
    alignItems: "center"
  },
  cards: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: TextColor
  },
  first: {
    width: windowWidth,
    height: windowHeight / 5,
    backgroundColor: FormScreenFirstView,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 30,
    color: TextColor,
    fontWeight: "bold"
  },
  infor: {
    fontSize: 18,
    color: TextColor,
    textAlign: "center",
    marginTop: 15
  },
  second: {
    width: windowWidth,
    height: windowHeight,
    padding: 20,
  },
  name: {
    color: TextColor,
    fontSize: 19,
    fontWeight: "900",
    marginTop: 10
  },
  input: {
    width: windowWidth / 1.1,
    height: windowHeight / 14,
    backgroundColor: FormScreenFirstView,
    marginTop: 10,
    borderRadius: 10,
    fontSize: 17,
    color: TextColor,
  },
  social: {
    color: TextColor,
    fontSize: 28,
    fontWeight: "bold",
  },
  third: {
    width: windowWidth / 1.1,
    height: windowHeight / 17,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20
  },

  link: {
    width: windowWidth / 1.1,
    height: windowHeight / 13,
    backgroundColor: FormScreenFirstView,
    borderRadius: 10,
    fontSize: 17,
    flex: 1,
    marginLeft: 10,
    color: TextColor
  },
  icon: {
    marginTop: 10
  },
  forth: {
    width: windowWidth,
    height: windowHeight / 1.1,
    padding: 20,
    marginTop: 20
  },
  fifth: {
    width: windowWidth,
    height: windowHeight / 1.2,
    padding: 20,

  },

  bio: {
    width: windowWidth / 1.1,
    height: windowHeight / 22,
    backgroundColor: FormScreenFirstView,
    marginTop: 10,
    borderRadius: 10,
    fontWeight: 'bold',
    fontSize: 17,
    flex: 1,
    color: TextColor,
    textAlignVertical: "top"
  },
  Sixth: {
    width: windowWidth,
    height: windowHeight / 1.8,
    padding: 20,
  },
  cv: {
    color: TextColor,
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold"
  },
  submit: {
    width: windowWidth,
    height: windowHeight / 9,
    backgroundColor: SecondEndFormColor,
    justifyContent: "center",
    alignItems: 'center'
  },
  btn: {
    width: windowWidth / 3.7,
    height: windowHeight / 14,
    alignItems: "center",
    justifyContent: "center",
    opacity: 1,
    borderWidth: 2,
    borderColor: ButtonBorderColor,
    borderRadius: 10,
  },
  end: {
    fontSize: 20,
    fontWeight: '900',
    color: TextColor
  },
  email: {
    width: windowWidth,
    height: windowHeight / 5,
    backgroundColor: TextHeader,
    alignItems: 'center',
    justifyContent: "center"
  },
  last: {
    width: windowWidth / 1.2,
    height: windowHeight / 16,
    backgroundColor: TextColor,
  }

})    








