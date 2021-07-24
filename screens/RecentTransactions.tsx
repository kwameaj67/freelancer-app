import * as React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity,Image,Animated,Easing } from 'react-native';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import { category } from '../constants/List'
import { Feather } from '@expo/vector-icons'
import { useState } from 'react';
import  { spinValue }  from '../Animation/animate'


const RecentTransactions = () => {

   Animated.loop(
       Animated.timing(spinValue,{
           toValue:1,
           duration:7000,
           useNativeDriver:true,
           easing:Easing.linear,
           delay:1500
       })
   ).start()

   const spin = spinValue.interpolate({
       inputRange:[0,1],
       outputRange:['0deg','50deg'],
   })

   const rotate = {
       transform:[{rotate:spin}]
    }

   
    const Avatar = () => {
        return(
            <Image source={require('../assets/images/profile.webp')} style={styles.avatar}/>
        )
    }
    type friendImage = { 
        imgStyle: {}
    }
    const FriendImage:React.FC<friendImage> = ({imgStyle}) => {
        return(
            <View style={[styles.friendAvatarContainer,imgStyle]}>
                <Image source={require('../assets/images/profile.webp')} style={styles.friendAvatar}/> 
            </View>
        )
    }
    return (
        <View style={styles.view}>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.txt1}>Recent Transactions</Text>
                    <Text style={styles.txt2}>See all</Text>
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.categoryContainer}>
                        {
                            category.map((item, index) => (
                                <TouchableOpacity key={index} activeOpacity={0.8} >
                                    <View style={index === 0 ? styles.itemDarkContainer : styles.itemContainer}>
                                        <Text style={index === 0 ? styles.textDark : styles.textLight}>{item.name}</Text>
                                    </View>
                                </TouchableOpacity>
                            ))
                        }
                    </View>
                </ScrollView>
                <View>
                    <Text style={styles.txt1}>Today</Text>
                </View>
                <View style={styles.listContainer}>
                    <View style={styles.rowContainer}>
                        <View style={styles.iconContainer}>
                            <Feather size={22} name="lock" color="black" />
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.status}>Payment</Text>
                            <View style={styles.priceContainer}>
                                <Text style={styles.msg}>Payment from Andrea</Text>
                                <Text style={styles.price}>{`$30.00`}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <Animated.View style={[styles.ringContainer,]}>
                    <View style={styles.greyRing}>
                        <View style={styles.bgWhite}>
                            <View style={styles.bgBlue}>
                                <View style={styles.bgLightBlue}>
                                    <View style={styles.borderDeepBlue}>
                                        <Avatar/>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <FriendImage imgStyle={{bottom: 290,position: 'absolute'}}/>
                    <FriendImage imgStyle={{bottom: 180,left:-5,position: 'absolute'}}/>
                    <FriendImage imgStyle={{bottom: 180,right:-5,position: 'absolute'}}/>
                    <FriendImage imgStyle={{bottom: 35,left:0,position: 'absolute'}}/>
                    <FriendImage imgStyle={{bottom: 35,right:0,position: 'absolute'}}/>
                </Animated.View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}  activeOpacity={0.9}>
                        <Text style={styles.buttonText}>See Details</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default RecentTransactions


const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: Colors.dark.background,
    },
    container: {
        marginHorizontal: 20
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30
    },
    txt1: {
        color: Colors.dark.blue,
        fontSize: 26,
        fontFamily: 'Bold'
    },
    txt2: {
        color: Colors.dark.grey,
        fontSize: 14,
        fontFamily: 'Regular'
    },
    categoryContainer: {
        marginVertical: 30,
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemDarkContainer: {
        backgroundColor: Colors.dark.blue,
        paddingVertical: 8,
        paddingHorizontal: 25,
        marginRight: 10,
        borderRadius: 20,
    },
    itemContainer: {
        backgroundColor: 'white',
        paddingVertical: 8,
        paddingHorizontal: 25,
        marginRight: 15,
        borderRadius: 20
    },
    textDark: {
        color: 'white',
        fontSize: 14,
        fontFamily: 'Regular'
    },
    textLight: {
        color: 'black',
        fontSize: 14,
        fontFamily: 'Regular'
    },
    listContainer: {
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 16,
        marginVertical: 20,
        borderRadius: 16,
        // flex:1,
    },
    rowContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
    },
    iconContainer: {
        padding: 15,
        borderRadius: 12,
        marginRight: 20,
    },
    textContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    priceContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
    },
    status: {
        fontSize: 16,
        color: 'black',
        fontFamily: 'Bold',
        marginBottom: 5
    },
    msg: {
        fontSize: 14,
        color: Colors.dark.grey,
        fontFamily: 'Regular',
    },
    price: {
        fontSize: 14,
        fontFamily: 'Bold',
        color: Colors.dark.blue
    },
    ringContainer: {
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
    },
    greyRing: {
        height: 320,
        width: 320,
        borderRadius: 320,
        borderWidth: 1.5,
        borderColor: "#d9dadb",
        justifyContent: 'center',
        alignItems: 'center',
    },
    bgWhite: {
        height: 230,
        width: 230,
        borderRadius: 230,
        borderWidth: 2,
        borderColor: 'white',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bgBlue: {
        height: 228,
        width: 228,
        borderRadius: 120,
        borderWidth: 2,
        borderColor: 'white',
        backgroundColor: "#b5d6f7",
        justifyContent: 'center',
        alignItems: 'center',
    },
    bgLightBlue: {
        height: 170,
        width: 170,
        borderRadius: 110,
        borderWidth: 2,
        borderColor: 'white',
        backgroundColor: Colors.dark.background,
        justifyContent: 'center',
        alignItems: 'center',
    },
    borderDeepBlue:{
        height: 130,
        width: 130,
        borderRadius: 110,
        borderWidth: 4,
        borderColor:Colors.dark.blue,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar:{
        width: 110,
        height: 110,
        borderRadius: 100,
    },
    friendAvatarContainer:{
        height: 70,
        width: 70,
        borderRadius: 80,
        borderWidth: 2,
        borderColor:"white",
        justifyContent: 'center',
        alignItems: 'center',
    },
    friendAvatar:{
        width: 65,
        height: 65,
        borderRadius: 75,
    },
    buttonContainer: {
        justifyContent: 'flex-end',
        marginTop:80
    },
    button: {
        backgroundColor: Colors.dark.blue,
        alignItems: 'center',
        padding: 22,
        borderRadius: 100
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontFamily: "Bold"
    },
})