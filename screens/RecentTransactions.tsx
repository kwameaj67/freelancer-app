import * as React from 'react';
import { ScrollView, StyleSheet,TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import { category } from '../constants/List'
import { Feather } from '@expo/vector-icons'


const RecentTransactions = () => {
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
                                <TouchableOpacity key={index} activeOpacity={0.8}>
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
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}  activeOpacity={0.9}>
                        <Text style={styles.buttonText}>Login</Text>
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
        fontSize: 24,
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
    buttonContainer: {
        // flex:1,
        justifyContent: 'flex-end',
        marginTop:440
    },
    button: {
        backgroundColor: Colors.dark.blue,
        alignItems: 'center',
        padding:22,
        borderRadius:100
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontFamily: "Bold"
    },
})