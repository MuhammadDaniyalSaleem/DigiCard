import React from 'react';
import { ButtonColor, WorkColor, TextColor,  ModalScreenBackgroundColor, MainScreenColor, ButtonBorderColor, ColorForText } from '../color/Allcolor';
import { StyleSheet, Image, Dimensions,View, Pressable, Text, Modal, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import baseURLImg from '../baseURLImg';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const DescriptionModal = ({  showdata, changeState, data ,navigation}) => {
// const navigation = useNavigation()

    const showImage = require("../../image/images.jpg");
    console.log("new data")
    console.log(data)

    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={showdata}


        >

            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.header}>
                        <Entypo style={styles.close} onPress={() => changeState()} name="chevron-small-down" size={50} color="white" />
                    </View>
                    <Image style={styles.image} source={data.item_pic != "default" ? { uri: `${baseURLImg}${data.item_pic}` } : showImage} />
                    <View style={{ flexDirection: 'column', }}>

                        <View style={{ flexDirection: 'row', marginTop: 10, width: 300, height: 27, borderBottomWidth: 1, borderColor: "white" }}>
                            <Text style={[styles.Name, { color: WorkColor }]}>Name:</Text>
                            <Text style={[styles.Name, { flex: 1, fontWeight: "500", marginLeft: 180 }]}>{data.item_name}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 20, width: 300, height: 27, borderBottomWidth: 1, borderColor: "white", justifyContent: "space-around" }}>
                            <Text style={[styles.Name, { color: WorkColor }]}>Type:</Text>
                            <Text style={[styles.Name, { fontWeight: "500", marginLeft: 175 }]}>{data.item_type} </Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 20, width: 300, height: 27, borderBottomWidth: 1, borderColor: "white" }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={[styles.Name, { color: WorkColor }]}>Quantity :</Text>
                                <Text style={[styles.Name, { fontWeight: "500", marginLeft: 200 }]}>{data.quantity}</Text>
                            </View>
                        </View>
                        <View style={styles.middleview}>

                            <Pressable style={[styles.price, { flexDirection: "row" }]}>
                                <Text style={[styles.text, { color: WorkColor }]}>Color :</Text>

                            </Pressable>
                            <Pressable style={[styles.price, { marginLeft: 26 }]}>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={[styles.text, { color: WorkColor }]}>Prices : </Text>
                                    <Text style={styles.text}>{data.item_price}</Text>
                                </View>

                            </Pressable>
                        </View>

                    </View>










                    <View style={{ flexDirection: "row", }}>
                        <Pressable style={[styles.modalbutton, { backgroundColor: ButtonColor, }]} onPress={() => Alert.alert("Empty ")} >

                            <Text style={[styles.text, { textAlign: 'center', fontSize: 17, }]} >Order on </Text>
                            <Text style={[styles.text, { color: WorkColor }]}> call</Text>
                        </Pressable>
                        <Pressable style={styles.modalbutton}
                            onPress={() => 
                                navigation.navigate('Form')
                        
                            }
                        >
                            <View style={{ flexDirection: "row" }}>
                                <Text style={styles.text}>Order</Text>
                                <Text style={[styles.text, { color: WorkColor, marginLeft: 1 }]}>Now</Text>
                            </View>
                        </Pressable>
                        <Pressable
                            style={styles.modalbutton} onPress={() => Alert.alert("Empty ")}>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={styles.text}>Get</Text>
                                <Text style={[styles.text, { color: WorkColor, marginLeft: 5 }]}>Info</Text>
                            </View>
                        </Pressable>
                    </View>
                </View>
            </View>




        </Modal>


    )
}
export default DescriptionModal
const styles = StyleSheet.create({
    centeredView: {
        justifyContent: "center",
        alignItems: "center",

    },
    modalView: {
        width: 400,
        height: windowHeight / 1.5,
        marginTop: 253,
        backgroundColor: ModalScreenBackgroundColor,
        borderRadius: 15,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        borderColor: WorkColor,
        borderTopWidth: 2,

    },
    text: {
        color: TextColor,
        fontSize: 16,
        fontWeight: "700"
    },
    modalbutton: {
        width: windowWidth / 4,
        height: windowHeight / 13,
        alignItems: "center",
        justifyContent: "center",
        opacity: 1,
        borderWidth: 2,
        borderColor: ButtonBorderColor,
        borderRadius: 10,
        marginTop: 20,
        marginLeft: 2.5,
    },
    price: {
        width: windowWidth / 2.9,
        height: windowHeight / 13,
        alignItems: "center",
        justifyContent: "center",
        opacity: 1,
        borderWidth: 2,
        borderColor: ButtonBorderColor,
        borderRadius: 10,
        marginTop: 20,

    },
    Name: {
        color: TextColor,
        fontSize: 20,
        fontWeight: '800',

    },
    image: {
        width: windowWidth / 1.3,
        height: windowHeight / 5,
        borderRadius: 10,


    },
    header: {
        width: 370,
        height: 50,
        alignItems: "flex-end",
        flex: 1
    },
    lastview: {
        width: 25,
        height: 25,
        borderRadius: 50,
        backgroundColor: TextColor,
        marginLeft: 5
    },
    middleview: {
        width: windowWidth / 1.3,
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: 'center',
    }
})