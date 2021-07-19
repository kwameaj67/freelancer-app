import * as React from 'react';
import { View, StyleSheet, Text, Platform } from 'react-native'
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import Colors from '../constants/Colors';

const Card = () => {
    return (
        <View style={styles.card}>
            <View style={styles.headerContainer}>
                <Feather name="menu" size={20} color="black" />
                <FontAwesome5 name="ellipsis-v" size={16} color="black" />
            </View>
            <View style={styles.profileContainer}>
                <View style={styles.avatar}></View>
                <Text style={styles.name}>Hira Riaz</Text>
                <Text style={styles.role}>UX/UI Designer</Text>
            </View>
            <View style={styles.worksContainer}>
                <View style={styles.work}>
                    <Text style={styles.price}>$8900</Text>
                    <Text style={styles.title}>Income</Text>
                </View>
                <View style={styles.line}></View>
                <View style={styles.work}>
                    <Text style={styles.price}>$5500</Text>
                    <Text style={styles.title}>Expenses</Text>
                </View>
                <View style={styles.line}></View>
                <View style={styles.work}>
                    <Text style={styles.price}>$890</Text>
                    <Text style={styles.title}>Loan</Text>
                </View>
            </View>
        </View>
    )
}
export default Card


const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        marginTop: 50,
        marginHorizontal: 20,
        borderRadius: 20,
        ...Platform.select({
            ios: {
                shadowColor: "white",
                shadowOffset: { width: 0.4, height: 0.4},
                shadowOpacity: 0.6
            },
        })
    },
    headerContainer: {
        marginTop: 20,
        marginHorizontal: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    profileContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 10,
    },
    avatar: {
        backgroundColor: 'grey',
        width: 100,
        height: 100,
        borderRadius: 100,
        marginVertical: 10
    },
    name: {
        marginVertical: 5,
        fontSize: 28,
        fontWeight: "bold",
    },
    role: {
        fontSize: 14,
    },
    worksContainer: {
        marginVertical: 60,
        marginHorizontal: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    work: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    line: {
        width: 1,
        height: 50,
        backgroundColor: Colors.dark.grey,
        opacity: 0.4

    },
    price: {
        fontSize: 20,
        fontWeight: '500',
        color: Colors.dark.blue,
        marginBottom: 10
    },
    title: {
        fontSize: 14
    }
})