import * as React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import Colors from '../constants/Colors';


const LoginScreen = () => {

    const onPressLogin = () => {

    }
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={onPressLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    buttonContainer: {
        flex: 1,
    },
    button: {
        backgroundColor: Colors.dark.blue
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontFamily: "Bold"
    }
})