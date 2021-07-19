import * as React from 'react';
import { StyleSheet, } from 'react-native';
import { Text, View } from '../components/Themed';
import Card from '../components/Card';
import TransactionList from '../components/TransactionList'
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Card />
      </View>
      <View style={styles.overviewContainer}>
        <View style={styles.headingRowContainer}>
          <View style={styles.headingTextContainer}>
            <Text style={styles.heading}>Overview</Text>
            <Ionicons name="notifications-outline" size={22} color={Colors.dark.grey} />
            <View style={styles.dot}></View>
          </View>
          <View>
              <Text style={styles.date}>Sept 13,2020</Text>
          </View>
        </View>
        <TransactionList />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    flex: 0.55,
    // backgroundColor:'red'
  },
  overviewContainer: {
    flex: 0.45,
    // backgroundColor:'blue'
    marginTop: 20,
    marginHorizontal: 20,
  },
  headingRowContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headingTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.dark.blue,
    marginRight:5,
    fontFamily:'Bold',
  },
  dot:{
    width:6,
    height:6,
    borderRadius:6,
    backgroundColor:'red',
    top:-5,
    left:-6,
    
  },
  date:{
    fontSize:16,
    color:Colors.dark.blue,
    fontFamily:'Medium',
  }
});
