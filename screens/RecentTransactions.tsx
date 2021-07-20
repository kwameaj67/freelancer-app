import * as React from 'react';
import { StyleSheet, } from 'react-native';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';


const RecentTransactions = () => {
    return(
        <View style={styles.view}>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.txt1}>Recent Transactions</Text>
                    <Text style={styles.txt2}>See all</Text>
                </View>
            </View>
        </View>
    )
}

export default RecentTransactions


const styles = StyleSheet.create({
    view:{
        flex:1,
        backgroundColor:Colors.dark.background,
    },
    container:{
        marginHorizontal: 20
    },
    headerContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        marginTop:10
    },
    txt1: {
        color:Colors.dark.blue,
        fontSize:24,
        fontFamily:'Bold'
    },
    txt2: {
        color:Colors.dark.grey,
        fontSize:14,
        fontFamily:'Regular'
    }
})