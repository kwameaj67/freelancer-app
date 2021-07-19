import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors'

type Button = {
    title:String,
    press: () => {}
}

const CustomButton = ({ title, press }) => {
    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={press}>
                <Text>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
    },
    button: {
        backgroundColor: Colors.dark.blue
    }
})