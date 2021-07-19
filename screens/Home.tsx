import * as React from 'react';
import { StyleSheet,SafeAreaView,StatusBar } from 'react-native';
import { Text, View } from '../components/Themed';
import Card from '../components/Card';

export default function Home() {
  return (
    <View style={styles.container}>
        <View style={styles.cardContainer}>
            <Card/>
        </View>
        <View style={styles.overviewContainer}>

        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  cardContainer:{
    flex:0.55,
    // backgroundColor:'red'
  },
  overviewContainer:{
    flex:0.45,
    // backgroundColor:'blue'
  }
});
