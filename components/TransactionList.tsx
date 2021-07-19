import * as React from 'react';
import { View, StyleSheet, Text, Platform, ScrollView } from 'react-native'
import { Feather, FontAwesome5, AntDesign } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { data } from '../constants/List'

const TransactionList = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {
                data.map((item, index) => (
                    <View style={styles.container} key={item.id}>
                        <View style={styles.rowContainer}>
                            <View style={styles.iconContainer}>
                                <AntDesign size={20} name="arrowup" color="black" />
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={styles.status}>{item.status}</Text>
                                <View style={styles.priceContainer}>
                                    <Text style={styles.msg}>{item.msg}</Text>
                                    <Text style={styles.price}>{item.price}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                ))
            }
        </ScrollView>
    )
}

export default TransactionList;


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 16,
        marginTop: 10,
        marginBottom: 10,
        borderRadius:16
    },
    rowContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    iconContainer: {
        backgroundColor: Colors.dark.background,
        padding: 15,
        borderRadius: 12,
        marginRight: 20,
    },
    textContainer: {
        flex:1,
        flexDirection: 'column',
    },
    priceContainer:{
        flex:1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    status: {
        fontSize: 16,
        color: 'black',
        fontFamily:'Bold',
    },
    msg: {
        fontSize: 14,
        color: Colors.dark.grey,
        fontFamily:'Regular',
    },
    price: {
        fontSize: 14,
        fontFamily:'Bold',
    }
})